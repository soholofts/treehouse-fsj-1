/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * The quotes array contains objects containing a quote and its source. Other optional properties are citation, year & location 
***/
let quotes = [];



// Add 24 empty objects to the quotes array
for(let i = 0 ; i < 24 ; i++) {
  quotes.push({});
} 



// Populate the quotes array
quotes[0] = {	
	quote: "If more politicians knew poetry, and more poets knew politics, I am convinced the world would be a little better place in which to live",
	source: "John F. Kennedy",
	citation: "Speech",
	year: "1956",
	location: "Harvard University"
}	
quotes[1] = {	
	quote: "A martini. Shaken, not stirred",
	source: "James Bond",
	citation: "Goldfinger",
	year: "1964",
	location: "Hotel Bar"
}	
quotes[2] = {	
	quote: "There's no place like home",
	source: "Dorothy",
	citation: "The Wizard of Oz",
	year: "1939",
	location: "The land of Oz"
}	
quotes[3] = {	
	quote: "Don’t compromise yourself. You are all you’ve got",
	source: "Janis Joplin",
	citation: "Parade magazine",
	year: "April 1969",
}	
quotes[4] = {	
	quote: "Some of the worst mistakes of my life have been haircuts",
	source: "Jim Morrisson",
	citation: "The Doors",
	year: "Late 1960's",
	location: "California"
}	
quotes[5] = {	
	quote: "You may say I'm a dreamer, but I'm not the only one",
	source: "John Lennon",
	citation: "Imagine",
	year: "1971",
}	
quotes[6] = {	
	quote: "I can't understand why people are frightened of new ideas. I'm frightened of the old ones",
	source: "John Cage",
	year: "20th Century",
	location: "USA"
}	
quotes[7] = {	
	quote: "I am hitting my head against the walls, but the walls are giving way",
	source: "Gustav Mahler",
	year: "19th Century",
	location: "Vienna"
}	
quotes[8] = {	
	quote: "I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the moon and returning him safely to the earth",
	source: "John F. Kennedy",
	citation: "Special Message to the Congress",
	year: " 25th May 1961",
	location: "Washington DC"
}	
quotes[9] = {	
	quote: "Magic Mirror on the wall, who is the fairest one of all?",
	source: "Queen Grimhilde",
	citation: "Snow White and the Seven Dwarfs",
	year: "1937",
}	
quotes[10] = {	
	quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary",
	source: "John Keating",
	citation: "Dead Poets Society",
	year: "1989",
	location: "Welton Academy, Vermont"
}	
quotes[11] = {	
	quote: "Frankly, my dear, I don't give a damn",
	source: "Rhett Butler",
	citation: "Gone with the Wind",
	year: "1939",
	location: "USA"
}	
quotes[12] = {	
	quote: "Veni Vidi Vici",
	source: "Julius Caesar",
	citation: "Letter",
	year: "47bc",
	location: "Asia Minor"
}	
quotes[13] = {	
	quote: "I do not wish women to have power over men; but over themselves",
	source: "Mary Wollstonecraft",
	year: "1700's",
	location: "England"
}	
quotes[14] = {	
	quote: "I was obliged to be industrious. Whoever is equally industrious will succeed equally well",
	source: "J.S. Bach",
	year: "1700's",
	location: "Leipzig, Germany"
}	
quotes[15] = {	
	quote: "Works of art make rules; rules do not make works of art",
	source: "Claude Debussy",
}	
quotes[16] = {	
	quote: "In the future, everyone will be world-famous for 15 minutes",
	source: "Andy Warhol",
	citation: "Exhibition Programme",
	year: "1968",
	location: "Moderna Museet in Stockholm, Sweden"
}	
quotes[17] = {	
	quote: "You're a little scary sometimes, you know that? Brilliant ... but scary",
	source: "Ron Weasley",
	citation: "Harry Potter and the Philosopher's Stone",
	year: "1997",
	location: "Hogwarts"
}	
quotes[18] = {	
	quote: "I'll be back",
	source: "T1000",
	citation: "The Terminator",
	year: "1984",
	location: "USA"
}	
quotes[19] = {	
	quote: "Lesser artists borrow, great artists steal",
	source: "Igor Stravinsky",
	year: "20th Century",
	location: "Russia"
}	
quotes[20] = {	
	quote: "If you strike me down, I shall become more powerful than you can possibly imagine",
	source: "Obi-Wan Kenobi",
	citation: "Star  Wars Movie",
	year: "1977",
	location: "The Death Star"
}	
quotes[21] = {	
	quote: "I attribute my success to this: I never gave or took an excuse",
	source: "Florence Nightingale",
	year: "1800's",
}	
quotes[22] = {	
	quote: "A creative artist works on his next composition because he was not satisfied with his previous one",
	source: "Dmitri Shostakovich",
}	
quotes[23] = {	
	quote: "To achieve great things, two things are needed; a plan, and not quite enough time",
	source: "Leonard Bernstein",
	location: "USA"
}	



/***
 * getRandomNumber returns a random number between lowest and highest inclusive
***/
function getRandomNumber(lowest, highest) {
	return lowest + Math.floor((highest - lowest + 1) * Math.random());
}


/***
 * getRandomRgb returns a random color as an rgb string
***/
function getRandomRgb() {

	let r = 0, g = 0, b = 0;

	// set clipDark / clipBright to exclude colors that are too bright or too dark
	const clipDark = 92;
	const clipBright = 64;

	r = getRandomNumber(clipDark, 255-clipBright);
	g = getRandomNumber(clipDark, 255-clipBright);
	b = getRandomNumber(clipDark, 255-clipBright);
	
	const rgb = `rgb(${r},${g},${b})`;

	return rgb;
}



/***
 * getRandomQuote returns a random object from the quotes array
***/
var last = -1; // Hold last quote index

function getRandomQuote() {

	const numberOfQuotes = 4;//quotes.length;

	// Calc a random quote index between 0 and (numberOfQuotes - 1)
	//const i = Math.floor(numberOfQuotes * Math.random());
	let i = -1;
	
	// Try again if same as last time
	do {
		i = getRandomNumber(0, numberOfQuotes - 1);
	} while( i == last);

	last = i;

	// log random quote index and random quote object
	console.log('getRandomQuote()',`index = ${i} `, quotes[i]);

	// Return the random quote object
	return quotes[i];
}

getRandomQuote();



/***
 * printQuote selects a random object from the quotes array and generates the html to display it in the quote-box
***/
function printQuote() {
	const q = getRandomQuote();

	let html = 
	`<p class="quote">${q.quote}</p>\n` +
	`<p class="source">${q.source}\n`;
	
	if(q.citation) {
		html += `<span class="citation">${q.citation}</span>\n`;
	}
	
	if(q.year) {
		html += `<span class="year">${q.year}</span>\n`;
	}
	
	if(q.location) {
		html += `<span class="location">${q.location}</span>\n`;
	}

	html += '</p>';

	// display quote on page
	document.getElementById('quote-box').innerHTML = html;

	// change background to a random color
	const rgb = getRandomRgb();

	document.body.style.backgroundColor = rgb;

	// log quote, html text and randon background color
	console.log('printQuote()',q, html, rgb);

	// Clear the existing interval timer and start a new one 
	startInterval();
}


// Set the quote to automatically refresh every 10 seconds
let intervalHandle;

function startInterval() {
	
	// Clear last interval timer if exists
	if(intervalHandle) {
		clearInterval(intervalHandle);
	}
	
	// start a new interval timer and save handle
	intervalHandle = setInterval(printQuote, 10000);
} 

startInterval();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
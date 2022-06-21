/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'a',
    source: 'asource',
    citation: 'acit',
    year: '2000'
  },
  {
    quote: 'b',
    source: 'bsource',
    citation: 'bcit',
    year: '2001'
  },
  {
    quote: 'c',
    source: 'csource'
  },
  {
    quote: 'd',
    source: 'dsource',
    citation: 'dcit',
    year: '2003'
  },
  {
    quote: 'e',
    source: 'esource'
  },
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber]
  return randomQuote;
}
//console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote() {
  let quoteToPrint = getRandomQuote()
  let htmlToPrint = '';
    htmlToPrint += `<p class="quote"> ${quoteToPrint.quote} </p>`;
    // are there supposed to be line breaks for the HTML?
    htmlToPrint += `<p class="source"> ${quoteToPrint.source}`;
      if( quoteToPrint.citation !== undefined) {
        htmlToPrint += `<span class="citation"> ${quoteToPrint.citation} </span>`; 
      }
      if( quoteToPrint.year !== undefined) {
        htmlToPrint += `<span class="year"> ${quoteToPrint.year} </span>`; 
      }
    htmlToPrint += `</p>`;
    ;
  return htmlToPrint;
}

document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
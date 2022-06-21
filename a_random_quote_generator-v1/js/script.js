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
    year: '2000',
    tag: 'wellbeing'
  },
  {
    quote: 'b',
    source: 'bsource',
    citation: 'bcit',
    year: '2001',
    tag: 'movies'
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
  {
    quote: 'f',
    source: 'fsource'
  }
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
    // Question: are there supposed to be line breaks for the HTML?
    htmlToPrint += `<p class="source"> ${quoteToPrint.source}`;
      if( quoteToPrint.citation !== undefined) {
        htmlToPrint += `<span class="citation"> ${quoteToPrint.citation} </span>`; 
      }
      if( quoteToPrint.year !== undefined) {
        htmlToPrint += `<span class="year"> ${quoteToPrint.year} </span>`; 
      }
      if( quoteToPrint.tag !== undefined) {
        htmlToPrint += `<span class="tag"> ${quoteToPrint.tag} </span>`; 
      }
    htmlToPrint += `</p>`;
    
  document.getElementById('quote-box').innerHTML = htmlToPrint;
  changeBackground();
}


// https://alvarotrigo.com/blog/change-css-javascript/
function changeBackground() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let alpha = Math.random() + 0.01;
  let element = document.querySelector('body');
  element.style.backgroundColor = `rgba(${red},${green},${blue},1)`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
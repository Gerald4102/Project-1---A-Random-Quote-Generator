/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// several quotes as objects in an arrary
const quotes = [
  {
    quote: 'your relationship with change will define your life. if you accept it, it will inspire you to be more present and to live without holding back.',
    source: 'yung pueblo',
    citation: 'Instagram',
    year: '2021',
    tag: 'wellbeing'
  },
  {
    quote: 'Do not be afraid to love. Without love, life is impossible',
    source: 'Thich Nhat Hanh',
    tag: 'wellbeing'
  },
  {
    quote: "Don't count the days. Make the days count.",
    source: 'Muhammad Ali',
    tag: 'inspirational'
  },
  {
    quote: 'May the force be with you',
    source: 'various',
    citation: 'Star Wars',
    year: '1977',
    tag: 'movies'
  },
  {
    quote: "You're a wizard, Harry",
    source: 'Hagrid',
    citation: "Harr Potter and the Philosopher's Stone",
    year: '2001',
    tag: 'movies'
  },
  {
    quote: 'At times, our own light goes out and is rekindled by a spark from another person. Each of us has cause to think with deep gratitude of those who have lighted the flame within us.',
    source: 'Albert Schweitzer',
    tag: 'inspirational'
  }
];

// Function to generate a random number no that is no higher than the number of quotes in the array
// then return the quote equal to that random number from the array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber]
  return randomQuote;
}


//Function that will build the HTML from the quote fetched from the array
function printQuote() {
  
  let quoteToPrint = getRandomQuote()
  let htmlToPrint = '';

    htmlToPrint += `<p class="quote"> ${quoteToPrint.quote} </p>`;
    htmlToPrint += `<p class="source"> ${quoteToPrint.source}`;
    // conditional statements to check if optional properties of the quotes exist
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

// Function to generate random background colours using rgba() method
function changeBackground() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let alpha = Math.random();
// element variable adapted from source: https://alvarotrigo.com/blog/change-css-javascript/
  let element = document.querySelector('body');
  element.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
}

// Arrow function timer to change quote every 10 seconds
let autoChange = () => refresh = setInterval(printQuote, 10000);
autoChange()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
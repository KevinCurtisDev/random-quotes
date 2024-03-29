/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Get the root element to attach generated quotations to
const rootDiv = document.getElementById("quote-box");
const btn = document.getElementById("loadQuote");

// List of colours to be randomly assigned as a background colour
const colours = ["maroon", "pink", "lime", "violet", "brown", "orange", "teal", "olive"]

// Create an object constructor function
function Quote(quote, year, source, citation, tag) {
  this.quote = quote;
  this.year = year;
  this.source = source;
  this.citation = citation;
  this.tag = tag;
}

/********************** CREATE INDIVIDUAL OBJECTS *************************/

const quote1 = new Quote(
  "Whether you think you can, or think you can't, you're probably right.",
  1863,
  "Henry Ford",
  "wikipedia",
  "Common sense"
)

const quote2 = new Quote(
  "Keep away from people who try to belittle your dreams. Small people always do that, but the really great ones make you feel that you, too, can become great.",
  1835,
  "Mark Twain"
)

const quote3 = new Quote(
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  1847,
  "Thomas Edison",
  "inventors"
)

const quote4 = new Quote(
  "I am afraid we must make the world honest before we can honestly say to our children that honesty is the best policy.",
  1856,
  "George Bernard Shaw"
)

const quote5 = new Quote(
  "Surround yourself with only people who are going to lift you higher.",
  1954,
  "Oprah Winfrey",
  "inspirational"
)

const quote6 = new Quote(
  "The simple act of paying attention can take you a long way.",
  1964,
  "Keanu Reeves",
  "Common sense"
)

/*************************************************************************/

// Array of quote objects
const quotes = [
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6
]


// Function to select a random quote
const getRandomQuote = () => {
  let num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
}

// function to select a random colour
const randomBackground = () => {
  let backgroundColour = colours[Math.floor(Math.random() * colours.length)];
  document.body.style.backgroundColor = backgroundColour;
  btn.style.backgroundColor = backgroundColour;
}

// Function to render generated html to the dom
const printQuote = () => {
  let randQuote = getRandomQuote();


  // Generate quotation html
  let html = `<p class="quote"> ${randQuote.quote} </p>
              <p class="source"> ${randQuote.source}`

  if (randQuote.citation) {
    html += `<span class="citation">, ${randQuote.citation}</span>`
  }

  if (randQuote.year) {
    html += `<span class="year">, ${randQuote.year}</span>`
  }

  if (randQuote.tag) {
    html += `<span>, ${randQuote.tag}</span>`
  }

  html += `</p>`

  // Call randomBackground function to change background colour
  randomBackground()

  // Populate the root div with generated quote text
  rootDiv.innerHTML = html;

}


// Call printQuote function every 5 seconds
setInterval(printQuote, 10000);

// Manually call a the generate call function
btn.addEventListener("click", printQuote, false);


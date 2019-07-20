/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Get the root element to attach generated quotations to
const rootDiv = document.getElementById("quote-box");

// Create an object constructor function
function Quote(quote, year, source, citation) {
  this.quote = quote;
  this.year = year;
  this.source = source;
  this.citation = citation;
}

/********************** CREATE INDIVIDUAL OBJECTS *************************/

const quote1 = new Quote(
  "Whether you think you can, or think you can't, you're probably right.",
  1863,
  "Henry Ford",
  "wikipedia"
)

const quote2 = new Quote(
  "Keep away from people who try to belittle your dreams. Small people always do that, but the really great ones make you feel that you, too, can become great.",
  1835,
  "Mark Twain"
)

const quote3 = new Quote(
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  1847,
  "Thomas Edison"
)

const quote4 = new Quote(
  "I am afraid we must make the world honest before we can honestly say to our children that honesty is the best policy.",
  1856,
  "George Bernard Shaw"
)

const quote5 = new Quote(
  "Surround yourself with only people who are going to lift you higher.",
  1954,
  "Oprah Winfrey"
)

const quote6 = new Quote(
  "The simple act of paying attention can take you a long way.",
  1964,
  "Keanu Reeves"
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

// Function to render generated html to the dom
const printQuote = () => {
  let randQuote = getRandomQuote();
  //ternary operator to check if citation exists
  let citation = randQuote.citation ? randQuote.citation : "";
  //ternary operator to check if year exists
  let year = randQuote.year ? randQuote.year : "";

  // Generate quotation html
  let html = `<p class="quote"> ${randQuote.quote} </p>
              <p class="source"> ${randQuote.source}
                <span class="citation"> ${citation}</span>
                <span class="year"> ${year} </span>
              </p>`;

  // Call randomBackground function to change background colour
  randomBackground()

  // Populate the root div with generated quote text
  rootDiv.innerHTML = html;

}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
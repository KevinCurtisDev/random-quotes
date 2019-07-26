# Random Quotation Generator

## Summary

This is a browser based random quote generator built with JavaScript for the treehouse full stack JavaScript tech degree.

The idea of the project is to allow a user to click the generate quote button, which will pull a random quote from an array of premade quotes and display them in the dom. If the user doesn't click the button, random quotes will automatically get generated and displayed in the dom every 10 seconds.

## Features

The random quote generator automatically generates a random quote every 10 seconds. The user can also manually create a random quote by clicking on the generate quote button. Each quote displays a quote, a source, a citation if it exists, a date if known, and a category. As each new quote is generated, the screen's background colour will also change.

## Try the App
You can try the app here: [Random Quote Machine](https://kevincurtisdev.github.io/random-quotes/)

## Deployment

The app is deployed to github pages and can be viewed at the above link.

To run the project locally: 

* Clone or download the repo.
* From your terminal/command line, cd into the project folder;
* If you have python3 installed, runn the following command: python3 -m http.server

## Dependencies

* HTML5
* CSS3
* Vanilla JavaScript

## Sample code

The following code block sets up a constuctor function. It then instantiates a number of objects and stores those objects in a list for later use:

```JavaScript

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

```

### sources

* CSS file from treehouse
* quotations from wikipedia
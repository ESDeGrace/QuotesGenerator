const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr."
];

const quoteDisplay = document.getElementById('quote-display');
const newQuoteButton = document.getElementById('new-quote-button');
const quoteForm = document.getElementById('quote-form');
const quoteInput = document.getElementById('quote-input');
const submittedQuotesDiv = document.getElementById('submitted-quotes');

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}
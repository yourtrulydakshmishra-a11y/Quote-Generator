const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");


async function getQuote(url) {
try {
const response = await fetch(url);
if (!response.ok) {
throw new Error(`Quote request failed: ${response.status}`);
}

const data = await response.json();

quote.textContent = data.quote;
author.textContent = data.author;
} catch (error) {
console.error("Could not load a quote:", error);
quote.textContent = "Could not load a quote. Please try again.";
author.textContent = "";
}
}

getQuote(api_url);
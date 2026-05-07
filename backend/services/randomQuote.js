import quotes from "../data/quotes.json" with { type: "json" };

const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export default randomQuote;

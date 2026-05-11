import quotes from "../data/quotes.json" with { type: "json" };

const addQuote = (quote) => quotes.push(quote);

export default addQuote;

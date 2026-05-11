import { useCallback, useEffect, useState } from "react";
import AddQuote from "./components/AddQuote";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState();
  const [addQuote, setAddQuote] = useState(false);

  const fetchQuote = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3000/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addQuoteToggle = () => setAddQuote(!addQuote);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="container">
      {addQuote ? (
        <AddQuote addQuoteToggle={addQuoteToggle} />
      ) : (
        <button className="add-quote-button" onClick={addQuoteToggle}>
          Add Quote
        </button>
      )}
      {quote && (
        <p className="quote">
          <q className="quote-text">{quote.quote}</q>
          <em className="quote-author">{`- ${quote.author}`}</em>
        </p>
      )}
      <button className="quote-generator" onClick={fetchQuote}>
        Random Quote
      </button>
    </div>
  );
};

export default App;

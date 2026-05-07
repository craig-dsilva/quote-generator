import { useCallback, useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState();

  const fetchQuote = useCallback(async () => {
    try {
      const res = await fetch(
        "https://craig-dsilva-quote-generator-backend.hosting.codeyourfuture.io/random",
      );
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <>
      {quote && (
        <p className="quote">
          <q className="quote-text">{quote.quote}</q>
          <em className="quote-author">{`- ${quote.author}`}</em>
        </p>
      )}
      <button onClick={fetchQuote}>New Quote</button>
    </>
  );
};

export default App;

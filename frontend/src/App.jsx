import { useCallback, useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState();

  const fetchQuote = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3000/random");
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
    </>
  );
};

export default App;

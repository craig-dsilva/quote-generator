import { useState } from "react";

const AddQuote = () => {
  const [quoteQuery, setQuoteQuery] = useState("");
  const [authorQuery, setAuthorQuery] = useState("");
  const [formError, setFormError] = useState(false);

  const submitQuote = async () => {
    try {
      if (!quoteQuery || !authorQuery) {
        setFormError(true);
        throw new Error("Empty field in quote form.");
      }
      setFormError(false);
      const res = await fetch("http://localhost:3000/addquote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quoteQuery, authorQuery }),
      });
      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="quote">Quote: </label>
      <input
        type="text"
        name="quote"
        id="quote"
        value={quoteQuery}
        onChange={(e) => setQuoteQuery(e.target.value)}
      />
      <label htmlFor="author">Author: </label>
      <input
        type="text"
        name="author"
        id="author"
        value={authorQuery}
        onChange={(e) => setAuthorQuery(e.target.value)}
      />
      <button onClick={submitQuote}>Submit</button>
      {formError && <p>Please fill in both fields</p>}
    </div>
  );
};

export default AddQuote;

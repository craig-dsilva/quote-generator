import { useState } from "react";

const AddQuote = ({ addQuoteToggle }) => {
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
      const res = await fetch(
        "https://craig-dsilva-quote-generator-backend.hosting.codeyourfuture.io/addquote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quoteQuery, authorQuery }),
        },
      );
      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-quote">
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
      <button className="add-quote-button" onClick={submitQuote}>
        Submit
      </button>
      <button onClick={addQuoteToggle} className="cancel-button">
        Cancel
      </button>
      {formError && <p>Please fill in both fields</p>}
    </div>
  );
};

export default AddQuote;

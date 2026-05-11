import { useState } from "react";

const AddQuote = ({ addQuoteToggle }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [formError, setFormError] = useState(false);

  const submitQuote = async () => {
    try {
      if (!quote || !author) {
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
          body: JSON.stringify({ quote, author }),
        },
      );
      const data = await res.json();
      console.log(data);
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
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
      />
      <label htmlFor="author">Author: </label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
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

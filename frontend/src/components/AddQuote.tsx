const AddQuote = () => {
  return (
    <div>
      <label htmlFor="quote">Quote: </label>
      <input type="text" name="quote" id="quote" />
      <label htmlFor="author">Author: </label>
      <input type="text" name="author" id="author" />
      <button>Cancel</button>
      <button>Submit</button>
    </div>
  );
};

export default AddQuote;

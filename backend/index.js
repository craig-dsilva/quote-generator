import express from "express";
import cors from "cors";

import randomQuote from "./services/randomQuote.js";
import addQuote from "./services/addOuote.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/random", (req, res) => {
  res.json(randomQuote());
});

app.post("/addquote", (req, res) => {
  const { quote, author } = req.body;
  if (!quote || !author) return res.status(422).send("Empty field in data.");
  addQuote(req.body);
  res.status(201).send(req.body);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);

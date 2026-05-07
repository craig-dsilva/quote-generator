import express from "express";
import cors from "cors";

import randomQuote from "./services/randomQuote.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/random", (req, res) => {
  res.json(randomQuote());
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);

import { buzzes } from "../data/buzzes";

app.get("/api/buzzes", (req, res) => {
  res.json(buzzes);
});

// render every buzzes in every room
app.get("/api/buzzes", (req, res) => {
  res.json(buzzes);
});

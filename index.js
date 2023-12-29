const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hi, I'm Emu Ohtori");
});

app.listen(PORT, () => {
  console.log("Server ready ....");
});

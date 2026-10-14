
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Cloud Pulse",
    status: "Application running"
  });
});

// Display errors in the terminal during development
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Template rendering failed. Check the terminal.");
});

app.listen(PORT, () => {
  console.log(`Cloud Pulse running at http://localhost:${PORT}`);
});

import app from "./app.js";

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`|-----------------------------------|`)
  console.log(`| Running at http://localhost:${port}  |`)
  console.log(`|-----------------------------------|`)
});

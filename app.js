const express = require("express");

// * // Routs //
const usersRouter = require("./routes/users");

const app = express();
const port = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

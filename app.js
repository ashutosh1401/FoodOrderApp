const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./config/keys");

const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongoose Connected..."))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.use(require("./routes/owner"));
app.use(require("./routes/menu"));

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});

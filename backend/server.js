import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Cors from "cors";
import ownerRoute from "./routes/owner";
import menuRoute from "./routes/menu";
import { MONGODB_URI } from "./config/config";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongoose Connected..."))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(Cors());

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.use("/api/owner", ownerRoute);
app.use("/api/menu", menuRoute);

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});

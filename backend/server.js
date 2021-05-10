import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import ownerRoute from "./routes/owner";
import menuRoute from "./routes/menu";
import addressRoute from "./routes/address"
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
//console.log(app);
app.use(express.json());
app.use(Cors())

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.use("/api/owners", ownerRoute);
app.use("/api/menus", menuRoute);
app.use("/api/address", addressRoute);

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});

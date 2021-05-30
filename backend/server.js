require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Cors = require('cors')
const helmet = require('helmet');
const morgan = require('morgan');

// Routes
const ownerRoute = require("./routes/owner");
const userRoute = require('./routes/user')
const menuRoute = require("./routes/menu");
const addressRoute = require("./routes/address");
const compression = require('compression');

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongoose Connected..."))
  .catch((err) => console.log(err));

const app = express();
//console.log(app);
app.use(morgan('dev'));
app.use(compression())
app.use(helmet());
app.disable('x-powered-by')
app.use(express.json());
app.use(Cors())

app.get("/", (req, res) => {
  res.send("Hello User");
});

// API routes
app.use("/api/owners", ownerRoute);
app.use("/api/users", userRoute)
app.use("/api/menus", menuRoute);
app.use("/api/address", addressRoute);

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});

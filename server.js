require("dotenv").config();

//Controllers
const logsController = require("./controllers/logs.js");

const express = require("express");

const app = express();

//Other Variables
const methodOverride = require("method-override");
const port = 3000;

//Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("strictQuery", false);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Middleware
app.engine("jsx", require("jsx-view-engine").createEngine());
app.set("view engine", "jsx");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  next();
});

//Routes
app.use("/logs", logsController);

//Listen
app.listen(port, () => {
  console.log(`listening at port:${port}`);
});

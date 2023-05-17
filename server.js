require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

//Data
const Log = require("./models/logs");

//Routes (INDUCES)

// Index : Show all the things! - GET /fruits

app.get("/logs", async (req, res) => {
  try {
    const allLogs = await Log.find({});
    // console.log(allLogs);
    res.render("Index", { log: allLogs });
  } catch (error) {
    console.error(error);
  }
});

// New : An empty form for a new thing - GET /fruits/new

app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Delete : Get rid of this particular thing! - DELETE /fruits/:id

app.delete("/logs/:id", async (req, res) => {
  try {
    const deletedLog = await Log.findByIdAndRemove(req.params.id);
    console.log(deletedLog);
    res.redirect("/logs");
  } catch (error) {
    console.error(error);
  }
});

// Update : Update this specific thing with this updated form - PUT /fruits/:id

app.put("/logs/:id", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(updatedLog);
    res.redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.error(error);
  }
});

// Create : Make a new thing with this filled out form - POST /fruits

app.post("/logs", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    const newLog = await Log.create(req.body);
    console.log("New log created:", newLog);
    res.redirect("/logs");
  } catch (error) {
    console.error(error);
  }
});

// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit

app.get("/logs/:id/edit", async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    console.log(foundLog);
    res.render("Edit", {
      log: foundLog,
    });
  } catch (error) {
    console.error(error);
  }
});

// Show : Show me this one thing! - GET /fruits/:id

app.get("/logs/:id", async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    console.log(foundLog);
    res.render("Show", {
      log: foundLog,
    });
  } catch (error) {
    console.error(error);
  }
});

//Listen
app.listen(port, () => {
  console.log(`listening at port:${port}`);
});

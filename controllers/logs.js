const express = require("express");
const router = express.Router();
const Log = require("../models/logs");

// Index : Show all the things! - GET /fruits

router.get("/", async (req, res) => {
  try {
    const allLogs = await Log.find({});
    res.render("Index", { log: allLogs });
  } catch (error) {
    console.error(error);
  }
});

// New : An empty form for a new thing - GET

router.get("/new", (req, res) => {
  res.render("New");
});

// Delete : Get rid of this particular thing! - DELETE

router.delete("/:id", async (req, res) => {
  try {
    const deletedLog = await Log.findByIdAndRemove(req.params.id);
    console.log(deletedLog);
    res.redirect("/logs");
  } catch (error) {
    console.error(error);
  }
});

// Update : Update this specific thing with this updated form - PUT

router.put("/:id", async (req, res) => {
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

// Create : Make a new thing with this filled out form - POST

router.post("/", async (req, res) => {
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

// Edit : A prefilled form to update a specific thing - GET

router.get("/:id/edit", async (req, res) => {
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

// Show : Show me this one thing! - GET

router.get("/:id", async (req, res) => {
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

module.exports = router;

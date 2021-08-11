const express = require("express");

const itemModel = require("../models/item");
const app = express();

// read all items
app.get("/item", async (request, response) => {
  const items = await itemModel.find({});

  try {
    response.send(items);
  } catch (error) {
    response.status(500).send(error);
  }
});


// add item
app.post("/", async (request, response) => {
    //const item = new itemModel(request.body); used to test
    let item = new itemModel({
        Name: req.body.name,
        Price: req.body.price,
        Date: req.body.date
    })
    try {
      await item.save();
      response.send(item);
      res.redirect('./pages/selection.html');
    } catch (error) {
      response.status(500).send(error);
    }

  });


// update item
app.patch("/item/:id", async (request, response) => {
    try {
      await itemModel.findByIdAndUpdate(request.params.id, request.body);
      await itemModel.save();
      response.send(item);
    } catch (error) {
      response.status(500).send(error);
    }
  });


// delete item
app.delete("/item/:id", async (request, response) => {
    try {
      const item = await itemModel.findByIdAndDelete(request.params.id);
  
      if (!item) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  

module.exports = app;






const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./routes/itemRoutes.js");

const app = express();

app.use(express.json());



mongoose.connect(
  "mongodb+srv://ttcorp:qC34rhuJuf8xkUox@clusterim.oqjsq.mongodb.net/Inventory",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(itemRouter);


// mongo listen on port 3000
app.listen(3000, () => {
  console.log("Server is running...");
});
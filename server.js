const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const accountRoute = require("./backend/routes/accountRoute");

const cors = require("cors");
const url = require("./src/mongoURI");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", accountRoute);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((success) => console.log("Database connected successfully"))
  .catch((error) => console.log("error connecting to database", error));

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

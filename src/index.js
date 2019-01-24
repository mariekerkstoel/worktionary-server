const express = require("express");
const app = express();

const dictionaryRouter = require("./routers/dictionaryRouter");

app.use("/dictionary", dictionaryRouter)

module.exports = app;
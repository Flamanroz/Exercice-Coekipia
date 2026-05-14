const express = require("express");
const cors = require("cors");
const cars = require('../model/cars');
const func =  require('../functions/filter')

const app = express();

app.use(cors());

app.get("/cars", (req, res) => {

    console.log('BACKEND NODE-JS SÉLECTIONÉ ! ')
    const { brand, model, type } = req.query;

    const filtered = func.filterCars(cars,  {brand, model, type});

    res.json(filtered)
})

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001")
})


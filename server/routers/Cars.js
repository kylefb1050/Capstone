import { Router } from "express";
import Cars from "../models/cars.js";

const router = Router();

//create a car route
router.post("/", async (request, response) => {
  try {
    const newCars = new Cars(request.body);

    const data = await newCars.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all cars route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Cars.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single car by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Cars.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;

// const axios = require("axios");

// router.get("/List", async (request, response) => {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });

// const options = {
//   method: "GET",
//   url: "https://car-data.p.rapidapi.com/cars",
//   params: {
//     limit: "10",
//     page: "0"
//   },
//   headers: {
//     "X-RapidAPI-Key": "2ea45faad6msh24d23a943be61e1p125b8ajsnaed2302fea19",
//     "X-RapidAPI-Host": "car-data.p.rapidapi.com"
//   }
// };

import mongoose from "mongoose";

const carsSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
    validate: /^[0-9 ]*$/
  },
  make: {
    // eslint-disable-next-line prettier/prettier
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  model: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Model = mongoose.model("Model", carsSchema);

export default Model;

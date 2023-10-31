import mongoose from "mongoose";

const carsSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
    validate: /^[0-9 ]*$/,
    enum: [2010, 2016]
  },
  make: {
    // eslint-disable-next-line prettier/prettier
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/,
    enum: ["toyota", "honda"]
  },
  model: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/,
    enum: ["corolla", "civic"]
  }
});

const Cars = mongoose.model("Cars", carsSchema);

export default Cars;

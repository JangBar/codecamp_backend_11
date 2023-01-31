import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  name: String,
  personal: String,
})

export const Personal = mongoose.model("Personal",personalSchema)
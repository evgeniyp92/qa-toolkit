import mongoose from "mongoose";

const TCTOSchema = new mongoose.Schema({
  _id: String,
  title: String,
  status: String,
  priority: String,
  issued: Date,
  suspenseDays: Number,
});

export default mongoose.models.TCTO || mongoose.model("TCTO", TCTOSchema);

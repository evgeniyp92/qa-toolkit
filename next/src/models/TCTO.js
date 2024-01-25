import mongoose from "mongoose";

const TCTOSchema = new mongoose.Schema({
  title: String,
  status: String,
  priority: String,
  issued: Date,
  suspenseDays: Number,
  fileLink: String,
});

export default mongoose.models.TCTO || mongoose.model("TCTO", TCTOSchema);

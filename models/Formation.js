import mongoose from "mongoose";

const formationSchema = new mongoose.Schema({
  title: String,
  duration: String,
  description: String,
  image: String,
  instructor: String,
  date: String,
  location: String,
});

export default mongoose.model("Formation", formationSchema);

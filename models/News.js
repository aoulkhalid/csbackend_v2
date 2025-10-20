import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  image: String,
  location: String,
  duration: String,
  instructor: String,
});

export default mongoose.model("News", newsSchema);

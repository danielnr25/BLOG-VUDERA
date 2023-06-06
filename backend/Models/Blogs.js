const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  keywords: {
    type: String,
    required: [true, "Keywords are required"],
  },
  emailAuthor: {
    type: String,
    required: [true, "Email is required"],
  },
  authorName: {
    type: String,
    required: [true, "Author name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
});

const Blogs = mongoose.model("Blogs", blogSchema);
module.exports = Blogs;

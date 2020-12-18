//mongoose schema
const uniqid = require("uniqid");
const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    id:{
        type: String,
        default: uniqid(),
    },
    title:{
        type: String,
        required: [true, "Please enter the title"],
    },
    content:{
        type: String,
        required: [true, "Please enter the content"],
    },
    links:{
        type: Array,
        default: [],
    },
    image: {
        type: String,
        required: true,
    }
})

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
//mongoose schema
const uniqid = require("uniqid");
const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    id:{
        type: String,
        default: uniqid(),
    },
    author:{
        type: String,
        required: [true, "Please enter author name"],
    },
    title:{
        type: String,
        required: [true, "Please enter the title"],
    },
    content:{
        type: String,
        required: [true, "Please enter the content"],
    },
    relatedLinks:[{
        links: {
            type: String,
        },
        title: {
            type: String,
        }
    }]
})

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
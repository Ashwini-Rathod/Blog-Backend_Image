const express = require("express");
const upload = require("../helpers/multerUpload");
const { getAllBlogs, getBlogById, deleteBlog, createBlog } = require("../controller/blogController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(upload, createBlog);
router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
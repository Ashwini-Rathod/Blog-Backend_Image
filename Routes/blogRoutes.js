const express = require("express");
const { getAllBlogs, getBlogById, deleteBlog, createBlog } = require("../controller/blogController");
// const AppError = require("../helpers/appError");
const upload = require("../helpers/multerUpload");
// const sendError = require("../helpers/sendError");
// const sendResponse = require("../helpers/sendResponse");

const router = express.Router();

router.route("/").get(getAllBlogs).post(upload, createBlog);
// router.post("/", (req, res) =>{
//     upload(req, res, (err)=>{
//         if(err){
//             return sendError(new AppError(401, "Unsuccessful", "Internal Error"), req, res);
//         }
//         sendResponse(200, "Successful", req.file, req, res);
//     }, createBlog);
// })

router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
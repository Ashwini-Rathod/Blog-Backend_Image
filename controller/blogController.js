const Blog = require("../model/blogSchema");
const AppError = require("../helpers/appError");
const sendError = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const path = require("path");

const getAllBlogs = async (req, res, next)=>{
    try{ 
        let queryArray = ["id", "title"];
        let queryFilter = {};
        let flag ;
        if(Object.keys(req.query).length !== 0){
            Object.keys(req.query).forEach((key)=>{
                if(queryArray.includes(key)){
                    queryFilter[key] = req.query[key];
                    flag = true;
                }
            })
            if(flag){
                const blogs = await Blog.find(queryFilter);
                sendResponse(200, "Successful", blogs, req, res);
            }
            else{
                sendResponse(200, "Successful", [], req, res);
            }
        }
        else{
            let blogs = await Blog.find();
            sendResponse(200, "Successful", blogs, req, res);
        }        
    }catch(err){
        console.log(err);
        return sendError(new AppError(400, "Unsuccessful", "Internal Error"), req, res);
    }
}

const getBlogById = async (req, res, next)=>{
    try{
        let blog = await Blog.find({id: req.params.id});
        sendResponse(200, "Successful", blog, req, res);
    }
    catch(err){
        return sendError(new AppError(400, "Unsuccessful", "Internal Error"), req, res); 
    }
}

const createBlog = async (req, res, next)=>{
    let pathName = path.join(__dirname,"..",req.file.path);
    let relatedLinks = req.body.links.split(",");
    let newBlog = new Blog({
        title: req.body.title,
        content: req.body.content,
        links: relatedLinks,
        image: pathName,
    })
    try{
        const blog = await newBlog.save();
        sendResponse(200, "Successful", blog, req, res);

    }catch(err){
        console.log(err);
        return sendError(new AppError(400, "Unsuccessful", "Internal Error"), req, res);
    }
}

const deleteBlog = async(req, res, next) =>{
    try{
        let deleteblog = await Blog.findOneAndDelete({id: req.params.id});
        sendResponse(200, "Successful", deleteblog, req, res);
    }catch(err){
        return sendError(new AppError(400, "Unsuccessful", "Internal Error"), req, res);
    }
}

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogById = getBlogById;
module.exports.createBlog = createBlog;
module.exports.deleteBlog = deleteBlog;
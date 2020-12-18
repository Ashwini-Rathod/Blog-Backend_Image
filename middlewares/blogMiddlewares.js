const sendError = require("../helpers/sendError");
const AppError = require("../helpers/appError");
const sendResponse = require("../helpers/sendResponse");

const verifyPostRequest = (req, res, next)=>{
    const requiredProperties = ["title", "content", "links", "image"];
    let result = requiredProperties.every((key)=>{
        return req.body[key];
    })

    if(!result){
        return sendError(
            new AppError(401, "Unsuccesssul", "Invalid Input"),
            req,
            res,
          );
    }
    else{
        next();

    }
}

module.exports.verifyPostRequest = verifyPostRequest;
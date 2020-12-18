const multer = require("multer");
const path = require("path");
const sendError = require("../helpers/sendError");
const AppError = require("../helpers/appError");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },    
});

const upload = multer({
    storage: storage,
    fileFilter: function (req,file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error("Only images allowed"));
        }
        callback(null, true)
    },
    limits: {
        files: 1,
    }
}).single("image");


module.exports = upload;

// Importing mongoose Package
const mongoose = require("mongoose");
// Defining Schema
const newSchema = new mongoose.Schema({
    _id:{
        type:String,
        
    },
    title:{
        type:String,
        required:true
    },
    _catId:{
        type:mongoose.Types.ObjectId,
        required:true
    } 
})
// item will be the name for document to save item data
const item = mongoose.model("item",newSchema);
// Exporting with the name:item
module.exports = item;
 
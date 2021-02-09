// Importing mongoose
const mongoose = require("mongoose");
// Defining New Schema
const newSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    }

})
// cat will be the document name for saving category data
const cat = mongoose.model("catList",newSchema);
// Exporting cat 
module.exports = cat;

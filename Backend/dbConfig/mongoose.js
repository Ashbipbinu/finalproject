// Importing mongoose frame work
const mongoose = require("mongoose");
mongoose.Promise = global.Promise
// Connecting to Database
mongoose.connect("mongodb://localhost:27017/supermartList",{ useUnifiedTopology: true }).then(()=>{
    
    console.log("Successfully Connected to DATABASE")
}).catch((e)=>{
    console.log("Error occured while accessing DATABASE: "+e);
})


// Exporting Mongoose module
module.exports = mongoose

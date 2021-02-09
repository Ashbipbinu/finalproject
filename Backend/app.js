// Importing express module
const express = require("express");
// Using express
const app = express();
// Importing Body parser
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();   
  });        
   
// Connecting with mongoose
const mongoose = require("./dbConfig/mongoose");        
// Importing catList
const cat = require("./dbConfig/models/catList");  
// Importing ItemList
const item = require("./dbConfig/models/itemList");
/*
        CRUD operations for Category Lists
*/

// GET method for getting Category list
app.get("/catlist",(req,res)=>{
    cat.find().then((list)=>{
        res.send(list);
    });
})
// POST method for catList
app.post("/catlist",(req,res)=>{
    let title = req.body.title;
    var newList = new cat({
        title
    })
    newList.save().then((list)=>{
        res.send(list);
    })      
})

// UPDATE method for catList
app.patch("/catlist/:catId",(req,res)=>{
    cat.findOneAndUpdate({_catId:req.params.catId},{
        $set: req.body
    }).then(()=>{ 
        res.sendStatus(200);
    })
})
// DELETE method for catList
app.delete("/catlist/:catId",(req,res)=>{
    cat.findOneAndRemove({
        _catId: req.params.catId
    }).then((removedLIst)=>{
        res.send(removedLIst);
    });
});  
/*
Same Operations are required for the  list items
 */
// Beginning with GET method for list items

app.get("/catlist/:catId/item",(req,res)=>{
    item.find({
        _catId:req.params.catId 
    }).then((item)=>{ 
        res.send(item); 
    })   
})

// POST method for item list
app.post("/catlist/:catId/item",(req,res)=>{
            
    let newItem = new item({       
        title:req.body.title,
        _catId:req.params.catId
    });
    newItem.save().then((item)=>{
        res.send(item);
    })
})
//PATCH method for item list
app.patch("/catlist/:catid/item/:itemid",(req,res)=>{
    item.findOneAndUpdate({
        _catid: req.params._catid,
        _listid: req.params._listid
    },{
        $set:req.body
    }).then(()=>{
        res.sendStatus(200);
    })
})
// DELETE operation for item list
app.delete("/catlist/:catid/item/:itemid",(req,res)=>{

    item.findOneAndRemove({
        _itemid: req.params._itemid,
        _catid:req.params._catid
    }).then((removedList)=>{
        res.send(removedList);
    })
    
})
// Setting  Port Number to 3000
app.listen(3000,()=>{
    console.log("==========================================================================")
    console.log("Listening to the PORT 3000");
});

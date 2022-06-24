const mongoose=require('mongoose');

// mongodb://localhost:27017/Travel
mongoose.connect('mongodb+srv://SnehaS:Angel2000@cluster0.wurpy.mongodb.net/Travel?retryWrites=true&w=majority',(err)=>{
    if(!err)
    console.log("Connected successfully!!");
    else
    console.log("Error in Connection: "+JSON.stringify(err,undefined,2));

});
module.exports=mongoose;
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Auth")
.then(()=>{
    console.log("mongoDB Connected");
})
.catch(()=>{
    console.log("mongoDB Not Connected");
})

const LogInSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }

 })


 const Collection=new mongoose.model("collection1",LogInSchema)
 module.exports=Collection
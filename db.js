const mongoose=require("mongoose")
const url=`mongodb+srv://admin:admin@cluster0.j5cfnks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Database is connected"))
}
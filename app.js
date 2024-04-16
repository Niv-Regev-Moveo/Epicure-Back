const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express();

app.use(cors())

app.get("/" , (req,res)=>{
  res.send("Connected ")
})

const mongoDbUri = process.env.MONGODB_URI 

const PORT = process.env.PORT || 3001; 

mongoose.connect(mongoDbUri)
.then(()=>{
  console.log("DB Connected Successfully");
  app.listen(PORT , ()=>{
  console.log(`Server is running on port: ${PORT}`);
})
}). catch((error)=>{
  console.log(error)
})





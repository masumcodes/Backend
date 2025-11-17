import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

// Load .env from project root
dotenv.config();

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.on("error", (err) => {
      console.log("Error", err);
      throw err;
    });
    app.listen(port, () => {
      console.log(`Server is Running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed ", err);
  });

// import express from 'express'
// const app=express()

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
//      app.on("error",(err)=>{
//         console.log("Error",err);
//         throw err;})

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is running on${process.env.PORT}`);

//         })

//   } catch (err) {
//     console.log("Error", err);
//     throw err

//     }
// })();

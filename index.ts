import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import apiRouter from "./src/routes/api.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connected with Express , Mongodb Atlas, typeScript");
});

app.use("/api", apiRouter);

const mongoDbUri: string | undefined = process.env.MONGODB_URI || "";
const PORT = process.env.PORT || 3001;

mongoose
  .connect(mongoDbUri)
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error: string) => {
    console.log(error);
  });

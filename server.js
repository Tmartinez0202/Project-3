import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import cors from 'cors';
import inventoryRoutes from "./routes/api/inventories.js";

const { join } = path;
const app = express();

dotenv.config()

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/orders", inventoryRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
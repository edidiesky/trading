import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// routes
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);


const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error('MongoDB connection string is not defined.');
}

mongoose.connect(mongoUrl);
mongoose.connection.on('error', (error: Error) => console.log('Error'))

app.use(NotFound);
app.use(errorHandler);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});

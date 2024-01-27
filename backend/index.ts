import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    // origin: 'https://terratextrading.com',
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// route
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import transaction from "./routes/transactionRoute";
import investment from "./routes/InvestmentRoute";
import Withdrawal from "./routes/WithdrawalRoute";
import Roi from "./routes/RoiRoute";
import deposit from "./routes/depositRoute";
import uploadRoute from "./routes/uploadRoute";


app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/transaction", transaction);
app.use("/api/v1/investment", investment);
app.use("/api/v1/roi", Roi);
app.use("/api/v1/withdrawal", Withdrawal);
app.use("/api/v1/deposit", deposit);
app.use("/api/v1/upload", uploadRoute);


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

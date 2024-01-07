import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cloudinary from "cloudinary";
import cloudinaryStorage, { Options } from "multer-storage-cloudinary";

import multer from "multer";

const cloudinaryModule = cloudinary.v2;
// // console.log(process.env.cloud_name);

cloudinaryModule.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_key,
  api_secret: process.env.cloud_secret,
});


interface CustomOptions extends Options {
  destination: string;
}


const router = express.Router();
// Configure Multer
// const upload = multer({ dest: 'airbnb/' });
const storage = cloudinaryStorage({
  cloudinary: cloudinaryModule,
  destination: "airbnb", // Specify the folder in Cloudinary
  allowedFormats: ["jpg", "jpeg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
} as CustomOptions);


const upload = multer({ storage });


router.post("/single", upload.single("files"), async (req, res) => {
  try {
    // req.files contains an array of uploaded files
    const files: Express.Multer.File = req.file as Express.Multer.File;

    const result = await cloudinaryModule.uploader.upload(files?.path);
    // Optionally, you can respond with the URLs of the uploaded images
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, message: "Images uploaded successfully", urls: result?.secure_url });
  } catch (error) {
    console.error("Error uploading images:", error);

    res
      .status(500)
      .json({ success: false, message: "Failed to upload images" });
  }
});

export default router 

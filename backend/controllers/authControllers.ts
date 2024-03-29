// import bcrypt from "bcryptjs";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/User";

// GET All User
//  Public
const RegisterUser = asyncHandler(async (req: Request, res: Response) => {
  const { fullname, email, password, username, phone } = req.body;
  //
  if (!email || !password || !fullname || !username) {
    res.status(404);  
    throw new Error("Please fill in the valid credentails");
  }
  // check if the user exist
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(404);
    throw new Error("The user does exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const Tempuser = {
    email,
    password: hashedpassword,
    fullname,
    username,
    phone
  };
  const user = await User.create(Tempuser);

  const jwtcode:Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: user._id
    },
    jwtcode,
    { expiresIn: "2d" }
  );

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ user, token });

});

const LoginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  } 
  // Find the user in the database

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const verifyPassword = await bcrypt.compare(password!, user.password!);
  if (!verifyPassword) {
    res.status(404);
    throw new Error("Please provide a valid password");
  }

  const jwtcode: Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: user._id
    },
    jwtcode,
    { expiresIn: "2d" }
  );

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ user, token });
});



export {
  RegisterUser,
  LoginUser,
};

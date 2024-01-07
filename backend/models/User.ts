import mongoose from "mongoose";

// a structure of the user
export interface UserDocument extends Document {
  fullname: string;
  username: string;
  image: string;
  email: string;
  password: string;
  country?: string;
  deposit: number;
  bonus: number;
  referralbonus: number;
  phone: string;
  isAdmin: boolean;
  // ... other properties
}
const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      unique: true
    },
    username: {
      type: String,
      unique: true
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "PLease add an emailvalue"],
    },
    password: {
      type: String,
      required: [true, "PLease add a password value"],
    },
    country: {
      type: String,
    },
    deposit: {
      type: Number,
      default: 0
    },
    bonus: {
      type: Number,
      default: 0
    },
    referralbonus: {
      type: Number,
      default: 0
    },
    phone: {
      type: String,
      default: 0
    },
    isAdmin: {
      type:Boolean,
      default: 0
    },
  },
  { timestamps: true }
);

export default mongoose.model < UserDocument>("User", UserSchema);

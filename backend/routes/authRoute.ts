import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  RegisterUser,
  LoginUser,
} from "../controllers/authControllers";

router.post("/register", RegisterUser);
router.get("/login", LoginUser);
export default router;

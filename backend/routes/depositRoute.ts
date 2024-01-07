import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  GetDepositById,
  GetAllDeposit,
  CreateDeposit,
  DeleteDeposit,
  AdminUpdateDeposit,
  GetDepositOfAUser
} from "../controllers/DepositControllers";

router.get("/", authMiddleware, GetAllDeposit);
router.post("/", authMiddleware, CreateDeposit);
router.route('/profile')
  .get(authMiddleware, GetDepositOfAUser)

router.route('/:id')
  .get(authMiddleware, GetDepositById)
  .put(authMiddleware, AdminUpdateDeposit)
  .delete(authMiddleware, DeleteDeposit)



export default router;

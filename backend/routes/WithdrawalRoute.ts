import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  GetWithdrawalById,
  GetAllWithdrawal,
  CreateWithdrawal,
  AdminUpdateWithdrawal,
  DeleteWithdrawal,
  GetAllWithdrawalOfAUser
} from "../controllers/WithdrawalControllers";

router.get("/", authMiddleware, GetAllWithdrawal);
router.post("/", authMiddleware, CreateWithdrawal);


router.route('/profile')
  .get(authMiddleware, GetAllWithdrawalOfAUser)

router.route('/:id')
  .get(authMiddleware, GetWithdrawalById)
  .put(authMiddleware, AdminUpdateWithdrawal)
  .delete(authMiddleware, DeleteWithdrawal)



export default router;

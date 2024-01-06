import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  GetTransactionById,
  GetAllTransaction,
  CreateTransaction,
  DeleteTransaction,
  AdminUpdateTransaction,
  GetTransactionOfAUser
} from "../controllers/TransactionControllers";

router.get("/", authMiddleware, GetAllTransaction);
router.post("/", authMiddleware, CreateTransaction);
router.route('/profile')
  .get(authMiddleware, GetTransactionOfAUser)

router.route('/:id')
  .get(authMiddleware, GetTransactionById)
  .put(authMiddleware, AdminUpdateTransaction)
  .delete(authMiddleware, DeleteTransaction)



export default router;

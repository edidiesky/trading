import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  GetInvestmentById,
  GetAllInvestment,
  CreateInvestment,
  AdminUpdateInvestment,
  DeleteInvestment,
  GetAllInvestmentOfAUser
} from "../controllers/InvestmentControllers";

router.get("/", authMiddleware, GetAllInvestment);
router.post("/", authMiddleware, CreateInvestment);


router.route('/profile')
  .get(authMiddleware, GetAllInvestmentOfAUser)

router.route('/:id')
  .get(authMiddleware, GetInvestmentById)
  .put(authMiddleware, AdminUpdateInvestment)
  .delete(authMiddleware, DeleteInvestment)



export default router;

import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  GetRoiById,
  GetAllRoi,
  CreateRoi,
  AdminUpdateRoi,
  DeleteRoi,
  GetAllRoiOfAUser
} from "../controllers/RoiControllers";

router.get("/", authMiddleware, GetAllRoi);
router.post("/", authMiddleware, CreateRoi);


router.route('/profile')
  .get(authMiddleware, GetAllRoiOfAUser)

router.route('/:id')
  .get(authMiddleware, GetRoiById)
  .put(authMiddleware, AdminUpdateRoi)
  .delete(authMiddleware, DeleteRoi)



export default router;

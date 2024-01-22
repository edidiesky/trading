import moment from 'moment'
import asyncHandler from 'express-async-handler'
import Roi from '../models/roi'
import User from '../models/User'
import { NextFunction, Request as ExpressRequest, Response } from "express";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
  };
}


//PRIVATE/ADMIN
const GetRoiById = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the Roi id
  const { id } = req.params
  // find based on the id
  const roi = await Roi.findById({ _id: id })
  // cehck for existence  
  if (!roi) {
    throw new Error('No Roi has been created')
  }
  // send the data
    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ roi })
}
)

// //PRIVATE/ADMIN
const CreateRoi = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { price, plan, tier, profit,isPaid } = req.body
  const userId = req.user?.userId
  const user = await User.findOne({ _id: userId })

  const userDeposit = user?.deposit as any
  const userBonus = user?.bonus as any

  const updatedUser = await User.findOneAndUpdate({ _id: userId },
    { deposit: userDeposit - price, bonus: userBonus + 5 }, { new: true })
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 30);
  // console.log(updatedUser)
  const roi = await Roi.create({
    price,
    plan,
    tier,
    profit,
    startDate,
    endDate,
    isPaid,
    user: req?.user?.userId
  })

    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ roi, user: updatedUser })
}
)

// //PRIVATE/ADMIN
const AdminUpdateRoi = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the Roi
  const roi = await Roi.findById({ _id: id })
  if (!roi) {
    throw new Error('No such Roi has been found')
  }
  // update the Roi
  const updatedRoi = await Roi.findByIdAndUpdate({ _id: id }, req.body, { new: true })

    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ roi: updatedRoi })
}
)
//PRIVATE/ADMIN
const DeleteRoi = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the Roi
  const roi = await Roi.findById({ _id: id })
  if (!roi) {
    throw new Error('No such Roi has been found')
  }
  // update the Roi
  await Roi.findByIdAndDelete({ _id: id })

    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ message: 'Deleted sucessfully' })


}
)



// PRIVATE/ADMIN
const GetAllRoi = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find all Roi
  const roi = await Roi.find({}).populate('user', 'fullname username email country')
 
  if (!roi) {
    throw new Error('No Roi has been created')
  }
    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ roi })
}
)


// PRIVATE/ADMIN
const GetAllRoiOfAUser = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find all Roi
  const roi = await Roi.find({ user: req?.user?.userId })
  // check for Roi existence
  if (!roi) {
    throw new Error('No Roi has been created')
  }
    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ roi })
}
)





export {
  GetRoiById,
  GetAllRoi,
  CreateRoi,
  AdminUpdateRoi,
  DeleteRoi,
  GetAllRoiOfAUser
}
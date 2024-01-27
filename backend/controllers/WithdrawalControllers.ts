import moment from 'moment'
import asyncHandler from 'express-async-handler'
import Investment from '../models/Investment'
import User from '../models/User'
import { NextFunction, Request as ExpressRequest, Response } from "express";
import Withdrawal from '../models/Withdrawal';
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
  };
}


//PRIVATE/ADMIN
const GetWithdrawalById = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the Withdrawal id
  const { id } = req.params
  // find based on the id
  const withdrawal = await Withdrawal.findById({ _id: id })
  // cehck for existence  
  if (!withdrawal) {
    throw new Error('No Withdrawal has been created')
  }
  // send the data
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ withdrawal })
}
)

// //PRIVATE/ADMIN
const CreateWithdrawal = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { address, investmentId, price } = req.body
  const userId = req.user?.userId
  const user = await User.findOne({ _id: userId })


  const userDeposit = user?.deposit as any
  const userBonus = user?.bonus as any

  // 

  const updatedUser = await User.findOneAndUpdate({ _id: userId },
    { account_balance: userDeposit - price, bonus: userBonus + 5 }, { new: true })
  await Investment.findOneAndDelete({ _id: investmentId })

  const withdrawal = await Withdrawal.create({
    price,
    address,
    investment: investmentId,
    user: req?.user?.userId
  })

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ withdrawal, user: updatedUser })
}
)

// //PRIVATE/ADMIN
const AdminUpdateWithdrawal = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the Withdrawal
  const withdrawal = await Withdrawal.findById({ _id: id })
  if (!withdrawal) {
    throw new Error('No such Withdrawal has been found')
  }
  // update the Withdrawal
  const updatedWithdrawal = await Withdrawal.findByIdAndUpdate({ _id: id }, req.body, { new: true })

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ withdrawal: updatedWithdrawal })
}
)
//PRIVATE/ADMIN
const DeleteWithdrawal = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the Withdrawal
  const withdrawal = await Withdrawal.findById({ _id: id })
  if (!withdrawal) {
    throw new Error('No such Withdrawal has been found')
  }
  // update the Withdrawal
  await Withdrawal.findByIdAndDelete({ _id: id })

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ message: 'Deleted sucessfully' })


}
)



// PRIVATE/ADMIN
const GetAllWithdrawal = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find all Withdrawal
  const withdrawal = await Withdrawal.find({})
  // check for Withdrawal existence
  if (!withdrawal) {
    throw new Error('No Withdrawal has been created')
  }
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ withdrawal })
}
)


// PRIVATE/ADMIN
const GetAllWithdrawalOfAUser = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find all Withdrawal
  const withdrawal = await Withdrawal.find({ user: req?.user?.userId })
  // check for Withdrawal existence
  if (!withdrawal) {
    throw new Error('No Withdrawal has been created')
  }
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ withdrawal })
}
)





export {
  GetWithdrawalById,
  GetAllWithdrawal,
  CreateWithdrawal,
  AdminUpdateWithdrawal,
  DeleteWithdrawal,
  GetAllWithdrawalOfAUser
}
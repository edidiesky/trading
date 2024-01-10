import asyncHandler from "express-async-handler";
import Deposit from '../models/Deposit'
import { NextFunction, Request as ExpressRequest, Response } from "express";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
  };
}



//PRIVATE/ADMIN
const GetDepositById = asyncHandler(async (req: CustomInterface, res: Response) => {
  // 
  const depsoit = await Deposit.findOne({ _id: req.params.id })
    .populate('user', 'fullname username email country')
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ depsoit })
}
)

const GetDepositOfAUser = asyncHandler(async (req: CustomInterface, res: Response) => {
  // 
  const depsoit = await Deposit.find({ user: req?.user?.userId })
    .populate('user', 'fullname username email country')
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ depsoit })
}
)

//PRIVATE/ADMIN
const CreateDeposit = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the investment item
  const { amount, paymentMethod, status, proof_of_payment, plan } = req.body
  const depsoit = await Deposit.create({
    amount,
    user: req?.user?.userId,
    paymentMethod,
    status: status,
    proof_of_payment,
    plan
  })
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ depsoit })
}
)

//PRIVATE/ADMIN
const AdminUpdateDeposit = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the depsoit
  const depsoit = await Deposit.findById({ _id: id })
  if (!depsoit) {
    throw new Error('No such depsoit has been found')
  }
  // update the depsoit
  const updatedDeposit = await Deposit.findByIdAndUpdate({ _id: id }, req.body, { new: true })

   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ depsoit: updatedDeposit })
}
)
//PRIVATE/ADMIN
const DeleteDeposit = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the depsoit
  const depsoit = await Deposit.findById({ _id: id })
  if (!depsoit) {
    throw new Error('No such depsoit has     been found')
  }
  // update the depsoit
  await Deposit.findByIdAndDelete({ _id: id })
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ msg: 'Deposit has been sucessfully deleted' })
}
)



// PRIVATE/ADMIN
const GetAllDeposit = asyncHandler(async (req: CustomInterface, res: Response) => {
  // 
  const depsoit = await Deposit.find({}).populate('user', 'fullname username email country')
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ depsoit })
}
)


export {
  GetDepositById,
  GetAllDeposit,
  CreateDeposit,
  DeleteDeposit,
  AdminUpdateDeposit,
  GetDepositOfAUser
}
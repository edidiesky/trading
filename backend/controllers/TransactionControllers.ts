import asyncHandler from "express-async-handler";
import Transaction from '../models/Transactions'
import { NextFunction, Request as ExpressRequest, Response } from "express";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
  };
}



//PRIVATE/ADMIN
const GetTransactionById = asyncHandler(async (req: CustomInterface, res: Response) => {
  // 
  const transaction = await Transaction.findOne({ _id: req.params.id })
    .populate('user', 'fullname username email country')
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ transaction })
}
)

const GetTransactionOfAUser = asyncHandler(async (req: CustomInterface, res: Response) => {
  // 
  const transaction = await Transaction.find({ user: req?.user?.userId })
    .populate('user', 'fullname username email country')
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ transaction })
}
)

//PRIVATE/ADMIN
const CreateTransaction = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the investment item
  const { price, plan, tier, status, paymentMethod, proof_of_payment } = req.body
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 30);
  const transaction = await Transaction.create({
    investment: {
      plan,
      price,
      tier,
      rate: '1000%',
    },
    isPaid:true,
    paymentMethod,
    user: req?.user?.userId,
    status,
    plan,
    proof_of_payment
  })
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ transaction })
}
)

//PRIVATE/ADMIN
const AdminUpdateTransaction = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the transaction
  const transaction = await Transaction.findById({ _id: id })
  if (!transaction) {
    throw new Error('No such transaction has been found')
  }
  // update the transaction
  const updatedTransaction = await Transaction.findByIdAndUpdate({ _id: id }, req.body, { new: true })

   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ transaction: updatedTransaction })
}
)
//PRIVATE/ADMIN
const DeleteTransaction = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the transaction
  const transaction = await Transaction.findById({ _id: id })
  if (!transaction) {
    throw new Error('No such transaction has     been found')
  }
  // update the transaction
  await Transaction.findByIdAndDelete({ _id: id })
   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ msg: 'Transaction has been sucessfully deleted' })
}
)



// PRIVATE/ADMIN
const GetAllTransaction = asyncHandler(async (req: CustomInterface, res: Response) => {
  // 
  const page = req.query.page as unknown as number || 1
  const limit = req.query.limit as unknown as number || 3
  const skip = (page - 1) * limit

  const transaction = await Transaction.find({}).limit(limit!).skip(skip!)
  .populate('user', 'fullname username email country')
  const totalUser = await Transaction.countDocuments({})
  const totalPages = Math.ceil(totalUser / limit)

   res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ transaction, totalPages })
}
)


export {
  GetTransactionById,
  GetAllTransaction,
  CreateTransaction,
  DeleteTransaction,
  AdminUpdateTransaction,
  GetTransactionOfAUser
}
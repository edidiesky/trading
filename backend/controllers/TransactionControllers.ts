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
  res.status(200).json({ transaction })
}
)

//PRIVATE/ADMIN
const CreateTransaction = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the investment item
  const { transactionItems, user } = req.body
  const transaction = await Transaction.create({ transactionItems, user: req?.user?.userId })
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

  res.status(200).json({ transaction:updatedTransaction })
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
  res.status(200).json({ msg: 'Transaction has been sucessfully deleted' })
}
)



// PRIVATE/ADMIN
const GetAllTransaction = asyncHandler(async (req: CustomInterface, res: Response) => {
  // 
  const transaction = await Transaction.find({}).populate('user', 'fullname username email country')
  res.status(200).json({ transaction })
}
)


export {
  GetTransactionById,
  GetAllTransaction,
  CreateTransaction,
  DeleteTransaction,
  AdminUpdateTransaction,
}
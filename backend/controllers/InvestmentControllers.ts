import moment from 'moment'
import asyncHandler from 'express-async-handler'
import Investment from '../models/Investment'
import User from '../models/User'
import { NextFunction, Request as ExpressRequest, Response } from "express";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
  };
}


//PRIVATE/ADMIN
const GetInvestmentById = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the investment id
  const { id } = req.params
  // find based on the id
  const investment = await Investment.findById({ _id: id })
  // cehck for existence  
  if (!investment) {
    throw new Error('No investment has been created')
  }
  // send the data
    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ investment })
}
)

// //PRIVATE/ADMIN
const CreateInvestment = asyncHandler(async (req: CustomInterface, res: Response) => {
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
  const investment = await Investment.create({
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
  res.status(200).json({ investment, user: updatedUser })
}
)

// //PRIVATE/ADMIN
const AdminUpdateInvestment = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the investment
  const investment = await Investment.findById({ _id: id })
  if (!investment) {
    throw new Error('No such investment has been found')
  }
  // update the investment
  const updatedInvestment = await Investment.findByIdAndUpdate({ _id: id }, req.body, { new: true })

    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ investment: updatedInvestment })
}
)
//PRIVATE/ADMIN
const DeleteInvestment = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { id } = req.params
  // find the investment
  const investment = await Investment.findById({ _id: id })
  if (!investment) {
    throw new Error('No such investment has been found')
  }
  // update the investment
  await Investment.findByIdAndDelete({ _id: id })

    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ message: 'Deleted sucessfully' })


}
)



// PRIVATE/ADMIN
const GetAllInvestment = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find all investment
  const investment = await Investment.find({})
  // check for investment existence
  if (!investment) {
    throw new Error('No investment has been created')
  }
    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ investment })
}
)


// PRIVATE/ADMIN
const GetAllInvestmentOfAUser = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find all investment
  const investment = await Investment.find({ user: req?.user?.userId })
  // check for investment existence
  if (!investment) {
    throw new Error('No investment has been created')
  }
    res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ investment })
}
)





export {
  GetInvestmentById,
  GetAllInvestment,
  CreateInvestment,
  AdminUpdateInvestment,
  DeleteInvestment,
  GetAllInvestmentOfAUser
}
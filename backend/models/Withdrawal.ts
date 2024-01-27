import mongoose from 'mongoose'

const WithdrawalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    investment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Investment',
    },
    title: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)


export default mongoose.model("Withdrawal", WithdrawalSchema)
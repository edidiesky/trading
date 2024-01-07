
import mongoose from 'mongoose'

const depositSchema = new mongoose.Schema(

  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    paymentMethod: {
      type: String,
      default: 'Bitcoin',
    },
    status: {
      type: String,
    },
    plan: {
      type: String,
    },
    amount: {
      type: Number,
      default: 0
    },
    proof_of_payment: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true,
  }
)


export default mongoose.model("Deposit", depositSchema)
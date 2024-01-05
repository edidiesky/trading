
import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema(

  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    investment: {
      plan: { type: String, required: true },
      image: { type: Array, required: true },
      price: { type: Number, required: true },
      tier: {
        type: String,
        enum: ['tier 1', 'tier 2', 'tier 3'],
        default: 'tier 1'
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      rate: { type: String },
    },
    paymentMethod: {
      type: String,
      default: 'Bitcoin',
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: String,
    },
    status: {
      type: String,
      enum: ['failed', 'pending', 'success'],
      default: 'pending'
    },
    profit: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
)


export default mongoose.model("Transaction", transactionSchema)
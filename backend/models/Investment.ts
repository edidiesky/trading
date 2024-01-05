import mongoose from 'mongoose'

const investmentSchema = new mongoose.Schema(
  {

    title: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0.0,
    },
    plan: {
      type: String,
      required: true,
    },
    tier: {
      type: String,
      enum: ['tier1', 'tier2', 'tier3'],
      default: 'tier1'
    },
    profit: {
      type: Number,
      default: 0.0,
    },

    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },

  },
  {
    timestamps: true,
  }
)


export default mongoose.model("Investment", investmentSchema)
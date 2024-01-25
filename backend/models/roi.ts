import mongoose from 'mongoose'

const RoiSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
    proofOfPayment: {
      type: String,
    },
    tier: {
      type: String,
      enum: ['tier 1', 'tier 2', 'tier 3'],
      default: 'tier 1'
    },
    profit: {
      type: Number,
      default: 0.0,
    },

    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },

  },
  {
    timestamps: true,
  }
)


export default mongoose.model("Roi", RoiSchema)
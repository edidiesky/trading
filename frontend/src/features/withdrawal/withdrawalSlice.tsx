import { createSlice } from '@reduxjs/toolkit'
import {
  UpdateWithdrawal,
  getAllWithdrawal,
  CreateWithdrawal,
  DeleteWithdrawal,
  GetSingleInvestmentOfAUser
} from './withdrawalReducer'
interface investmentDeleteType {
  _id?: string
}


// Define a type for the investment state
interface Withdrawaltate {
  investmentDetails?: any,
  Withdrawal?: any,
  userWithdrawal?: any,


  investmentisLoading?: boolean,


  investmentisSuccess?: boolean,
  investmentisError?: boolean,
  createinvestmentisLoading?: boolean,
  createinvestmentisSuccess?: boolean,
  createinvestmentisError?: boolean,

  updateinvestmentisLoading?: boolean,
  updateinvestmentisSuccess?: boolean,
  updateinvestmentisError?: boolean,

  alertText?: any,
  showAlert?: boolean,
  alertType?: string,



}

// Define the initial state of the investment using that type
const initialState: Withdrawaltate = {
  investmentDetails: null,

  Withdrawal: [],
  userWithdrawal: [],


  investmentisLoading: false,
  investmentisSuccess: false,
  investmentisError: false,
  alertText: '',
  showAlert: false,
  alertType: '',

  createinvestmentisLoading: false,
  createinvestmentisSuccess: false,
  createinvestmentisError: false,

  updateinvestmentisLoading: false,
  updateinvestmentisSuccess: false,
  updateinvestmentisError: false,


}

export const Withdrawallice = createSlice({
  name: 'investment',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearinvestment: (state, action) => {
      state.investmentisSuccess = false
      state.Withdrawal = []
      state.investmentDetails = null
      state.investmentisError = false
      state.updateinvestmentisSuccess = false
      state.createinvestmentisLoading = false
      state.createinvestmentisSuccess = false
      state.updateinvestmentisSuccess = false
    },
  },
  extraReducers: (builder) => {
    // registration build case
    builder.addCase(getAllWithdrawal.pending, (state, action) => {
      state.investmentisLoading = true
    })
    builder.addCase(getAllWithdrawal.fulfilled, (state, action) => {
      state.investmentisSuccess = true
      state.investmentisLoading = false
      state.Withdrawal = action.payload
    })
    builder.addCase(getAllWithdrawal.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.investmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user investment
    builder.addCase(CreateWithdrawal.pending, (state, action) => {
      state.createinvestmentisLoading = true

    })
    builder.addCase(CreateWithdrawal.fulfilled, (state, action) => {
      state.investmentDetails = action.payload
      state.alertText = 'investment created succesfully'
      state.showAlert = true
      state.createinvestmentisLoading = false
      state.createinvestmentisSuccess = true
      state.alertType = 'success'
    })
    builder.addCase(CreateWithdrawal.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.createinvestmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // GetSingleInvestmentOfAUser

    builder.addCase(GetSingleInvestmentOfAUser.pending, (state, action) => {
      // state.investmentisLoading = true
    })
    builder.addCase(GetSingleInvestmentOfAUser.fulfilled, (state, action) => {
      state.investmentisSuccess = true
      state.investmentisLoading = false
      state.Withdrawal = action.payload
    })
    builder.addCase(GetSingleInvestmentOfAUser.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.investmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // DeleteWithdrawal slice

    builder.addCase(DeleteWithdrawal.pending, (state, action) => {

    })
    builder.addCase(DeleteWithdrawal.fulfilled, (state, action) => {

      state.Withdrawal = state.Withdrawal.filter((x: investmentDeleteType) => x._id !== action.payload);
      state.alertText = 'investment deleted succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(DeleteWithdrawal.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.investmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateWithdrawal.pending, (state, action) => {
      state.updateinvestmentisLoading = true
    })
    builder.addCase(UpdateWithdrawal.fulfilled, (state, action) => {
      state.updateinvestmentisSuccess = true
      state.updateinvestmentisLoading = false
      state.investmentDetails = action.payload
      state.alertText = 'investment Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(UpdateWithdrawal.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.updateinvestmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

  },
})

export const { clearinvestment } = Withdrawallice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.investment.value

export default Withdrawallice.reducer
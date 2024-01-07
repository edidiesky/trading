import { createSlice } from '@reduxjs/toolkit'
import {
  UpdateInvestments,
  getAllInvestments,
  CreateInvestments,
  DeleteInvestments,
  GetSingleInvestmentOfAUser
} from './investmentReducer'
interface investmentDeleteType {
  _id?: string
}


// Define a type for the investment state
interface investmentState {
  investmentDetails?: any,
  investments?: any,
  userinvestments?: any,


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
const initialState: investmentState = {
  investmentDetails: null,

  investments: [],
  userinvestments: [],


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

export const investmentSlice = createSlice({
  name: 'investment',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearinvestment: (state, action) => {
      state.investmentisSuccess = false
      state.investments = []
      state.investmentDetails = null
      state.investmentisError = false
      state.updateinvestmentisSuccess = false
    },
  },
  extraReducers: (builder) => {
    // registration build case
    builder.addCase(getAllInvestments.pending, (state, action) => {
      state.investmentisLoading = true
    })
    builder.addCase(getAllInvestments.fulfilled, (state, action) => {
      state.investmentisSuccess = true
      state.investmentisLoading = false
      state.investments = action.payload
    })
    builder.addCase(getAllInvestments.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.investmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user investment
    builder.addCase(CreateInvestments.pending, (state, action) => {
      state.createinvestmentisLoading = true

    })
    builder.addCase(CreateInvestments.fulfilled, (state, action) => {
      state.investmentDetails = action.payload
      state.alertText = 'investment created succesfully'
      state.showAlert = true
      state.createinvestmentisLoading = false
      state.createinvestmentisSuccess = true
      state.alertType = 'success'
    })
    builder.addCase(CreateInvestments.rejected, (state, action) => {
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
      state.investments = action.payload
    })
    builder.addCase(GetSingleInvestmentOfAUser.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.investmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // DeleteInvestments slice

    builder.addCase(DeleteInvestments.pending, (state, action) => {

    })
    builder.addCase(DeleteInvestments.fulfilled, (state, action) => {

      state.investments = state.investments.filter((x: investmentDeleteType) => x._id !== action.payload);
      state.alertText = 'investment deleted succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(DeleteInvestments.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.investmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateInvestments.pending, (state, action) => {
      state.updateinvestmentisLoading = true
    })
    builder.addCase(UpdateInvestments.fulfilled, (state, action) => {
      state.updateinvestmentisSuccess = true
      state.updateinvestmentisLoading = false
      state.investmentDetails = action.payload
      state.alertText = 'investment Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(UpdateInvestments.rejected, (state, action) => {
      state.investmentisSuccess = false
      state.investmentisError = true
      state.updateinvestmentisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

  },
})

export const { clearinvestment } = investmentSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.investment.value

export default investmentSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import {
  UpdateDeposit,
  getAllDeposit,
  GetSingleDeposit,
  CreateDeposit,
  DeleteDeposit,
  GetSingleTransactioOfAUser
} from './depositReducer'
interface depositDeleteType {
  _id?: string
}

const depositdata = JSON.parse(localStorage.getItem("deposit") || 'false');
const photo_deposit_id = localStorage.getItem("photo_deposit_id")

// Define a type for the deposit state
interface depositState {
  depositDetails?: any,
  deposits?: any,
  userdeposits?: any,
  bookmarks?: any,
  isLiked?: boolean,
  depositisLoading?: boolean,
  isBookMarked?: boolean,
  depositisSuccess?: boolean,
  depositisError?: boolean,

  deposit_photo_id?: string,
  createdepositisLoading?: boolean,
  createdepositisSuccess?: boolean,
  createdepositisError?: boolean,

  updatedepositisLoading?: boolean,
  updatedepositisSuccess?: boolean,
  updatedepositisError?: boolean,

  alertText?: any,
  showAlert?: boolean,
  alertType?: string,



}

// Define the initial state of the deposit using that type
const initialState: depositState = {
  depositDetails: null,

  deposits: depositdata ? depositdata : [],
  userdeposits: [],
  bookmarks: [],
  deposit_photo_id: photo_deposit_id ? photo_deposit_id : '',


  depositisLoading: false,
  depositisSuccess: false,
  depositisError: false,
  alertText: '',
  showAlert: false,
  alertType: '',

  createdepositisLoading: false,
  createdepositisSuccess: false,
  createdepositisError: false,

 updatedepositisLoading: false,
 updatedepositisSuccess: false,
 updatedepositisError: false,


}

export const depositSlice = createSlice({
  name: 'deposit',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cleardeposit: (state, action) => {
      state.depositisSuccess = false
      state.deposits = []
      state.depositDetails = null
      state.depositisError = false
      state.updatedepositisSuccess = false
    },
  },
  extraReducers: (builder) => {
    // registration build case
    builder.addCase(getAllDeposit.pending, (state, action) => {
      state.depositisLoading = true
    })
    builder.addCase(getAllDeposit.fulfilled, (state, action) => {
      state.depositisSuccess = true
      state.depositisLoading = false
      state.deposits = action.payload
    })
    builder.addCase(getAllDeposit.rejected, (state, action) => {
      state.depositisSuccess = false
      state.depositisError = true
      state.depositisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user deposit
    builder.addCase(CreateDeposit.pending, (state, action) => {
      state.createdepositisLoading = true

    })
    builder.addCase(CreateDeposit.fulfilled, (state, action) => {
      state.deposits = action.payload
      state.alertText = 'deposit created succesfully'
      state.showAlert = true
      state.createdepositisLoading = false
      state.createdepositisSuccess = true
      state.alertType = 'success'
    })
    builder.addCase(CreateDeposit.rejected, (state, action) => {
      state.depositisSuccess = false
      state.depositisError = true
      state.createdepositisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // GetSingleTransactioOfAUser

    builder.addCase(GetSingleTransactioOfAUser.pending, (state, action) => {
      // state.depositisLoading = true
    })
    builder.addCase(GetSingleTransactioOfAUser.fulfilled, (state, action) => {
      state.depositisSuccess = true
      state.depositisLoading = false
      state.deposits = action.payload
    })
    builder.addCase(GetSingleTransactioOfAUser.rejected, (state, action) => {
      state.depositisSuccess = false
      state.depositisError = true
      state.depositisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // get single deposit slice

    builder.addCase(GetSingleDeposit.pending, (state, action) => {
      // state.depositisLoading = true
    })
    builder.addCase(GetSingleDeposit.fulfilled, (state, action) => {
      state.depositisSuccess = true
      state.depositisLoading = false
      state.depositDetails = action.payload
    })
    builder.addCase(GetSingleDeposit.rejected, (state, action) => {
      state.depositisSuccess = false
      state.depositisError = true
      state.depositisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // DeleteDeposit slice

    builder.addCase(DeleteDeposit.pending, (state, action) => {

    })
    builder.addCase(DeleteDeposit.fulfilled, (state, action) => {

      state.deposits = state.deposits.filter((x: depositDeleteType) => x._id !== action.payload);
      state.alertText = 'deposit deleted succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(DeleteDeposit.rejected, (state, action) => {
      state.depositisSuccess = false
      state.depositisError = true
      state.depositisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateDeposit.pending, (state, action) => {
      state.updatedepositisLoading = true
    })
    builder.addCase(UpdateDeposit.fulfilled, (state, action) => {
      state.updatedepositisSuccess = true
      state.updatedepositisLoading = false
      state.depositDetails = action.payload
      state.alertText = 'deposit Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(UpdateDeposit.rejected, (state, action) => {
      state.depositisSuccess = false
      state.depositisError = true
      state.updatedepositisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

  },
})

export const { cleardeposit } = depositSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.deposit.value

export default depositSlice.reducer
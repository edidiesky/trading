import { createSlice } from '@reduxjs/toolkit'
import {
  UpdateTransactions,
  getAllTransactions,
  GetSingleTransaction,
  CreateTransactions,
  DeleteTransactions,
  GetSingleTransactioOfAUser
} from './transactionReducer'
interface transactionDeleteType {
  _id?: string
}

const transactiondata = JSON.parse(localStorage.getItem("transaction") || 'false');
const photo_transaction_id = localStorage.getItem("photo_transaction_id")

// Define a type for the transaction state
interface transactionState {
  transactionDetails?: any,
  transactions?: any,
  usertransactions?: any,
  bookmarks?: any,
  isLiked?: boolean,
  transactionisLoading?: boolean,
  isBookMarked?: boolean,
  transactionisSuccess?: boolean,
  transactionisError?: boolean,

  transaction_photo_id?: string,
  createtransactionisLoading?: boolean,
  createtransactionisSuccess?: boolean,
  createtransactionisError?: boolean,

  updatetransactionisLoading?: boolean,
  updatetransactionisSuccess?: boolean,
  updatetransactionisError?: boolean,

  alertText?: any,
  showAlert?: boolean,
  alertType?: string,



}

// Define the initial state of the transaction using that type
const initialState: transactionState = {
  transactionDetails: null,

  transactions: transactiondata ? transactiondata : [],
  usertransactions: [],
  bookmarks: [],
  transaction_photo_id: photo_transaction_id ? photo_transaction_id : '',


  transactionisLoading: false,
  transactionisSuccess: false,
  transactionisError: false,
  alertText: '',
  showAlert: false,
  alertType: '',

  createtransactionisLoading: false,
  createtransactionisSuccess: false,
  createtransactionisError: false,

 updatetransactionisLoading: false,
 updatetransactionisSuccess: false,
 updatetransactionisError: false,


}

export const transactionSlice = createSlice({
  name: 'transaction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cleartransaction: (state, action) => {
      state.transactionisSuccess = false
      state.transactions = []
      state.transactionDetails = null
      state.transactionisError = false
      state.updatetransactionisSuccess = false
    },
  },
  extraReducers: (builder) => {
    // registration build case
    builder.addCase(getAllTransactions.pending, (state, action) => {
      state.transactionisLoading = true
    })
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.transactionisSuccess = true
      state.transactionisLoading = false
      state.transactions = action.payload
    })
    builder.addCase(getAllTransactions.rejected, (state, action) => {
      state.transactionisSuccess = false
      state.transactionisError = true
      state.transactionisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user transaction
    builder.addCase(CreateTransactions.pending, (state, action) => {
      state.createtransactionisLoading = true

    })
    builder.addCase(CreateTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload
      state.alertText = 'transaction created succesfully'
      state.showAlert = true
      state.createtransactionisLoading = false
      state.createtransactionisSuccess = true
      state.alertType = 'success'
    })
    builder.addCase(CreateTransactions.rejected, (state, action) => {
      state.transactionisSuccess = false
      state.transactionisError = true
      state.createtransactionisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // GetSingleTransactioOfAUser

    builder.addCase(GetSingleTransactioOfAUser.pending, (state, action) => {
      // state.transactionisLoading = true
    })
    builder.addCase(GetSingleTransactioOfAUser.fulfilled, (state, action) => {
      state.transactionisSuccess = true
      state.transactionisLoading = false
      state.transactions = action.payload
    })
    builder.addCase(GetSingleTransactioOfAUser.rejected, (state, action) => {
      state.transactionisSuccess = false
      state.transactionisError = true
      state.transactionisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // get single transaction slice

    builder.addCase(GetSingleTransaction.pending, (state, action) => {
      // state.transactionisLoading = true
    })
    builder.addCase(GetSingleTransaction.fulfilled, (state, action) => {
      state.transactionisSuccess = true
      state.transactionisLoading = false
      state.transactionDetails = action.payload
    })
    builder.addCase(GetSingleTransaction.rejected, (state, action) => {
      state.transactionisSuccess = false
      state.transactionisError = true
      state.transactionisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // DeleteTransactions slice

    builder.addCase(DeleteTransactions.pending, (state, action) => {

    })
    builder.addCase(DeleteTransactions.fulfilled, (state, action) => {

      state.transactions = state.transactions.filter((x: transactionDeleteType) => x._id !== action.payload);
      state.alertText = 'transaction deleted succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(DeleteTransactions.rejected, (state, action) => {
      state.transactionisSuccess = false
      state.transactionisError = true
      state.transactionisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateTransactions.pending, (state, action) => {
      state.updatetransactionisLoading = true
    })
    builder.addCase(UpdateTransactions.fulfilled, (state, action) => {
      state.updatetransactionisSuccess = true
      state.updatetransactionisLoading = false
      state.transactionDetails = action.payload
      state.alertText = 'transaction Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(UpdateTransactions.rejected, (state, action) => {
      state.transactionisSuccess = false
      state.transactionisError = true
      state.updatetransactionisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

  },
})

export const { cleartransaction } = transactionSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.transaction.value

export default transactionSlice.reducer
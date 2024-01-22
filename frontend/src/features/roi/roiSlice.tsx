import { createSlice } from '@reduxjs/toolkit'
import {
  UpdateRoi,
  getAllRoi,
  CreateRoi,
  DeleteRoi,
  GetSingleRoiOfAUser,
  GetSingleRoi
} from './roiReducer'
interface roiDeleteType {
  _id?: string
}


// Define a type for the roi state
interface RoiState {
  roiDetails?: any,
  Roi?: any,
  userRoi?: any,


  roiisLoading?: boolean,


  roiisSuccess?: boolean,
  roiisError?: boolean,
  createroiisLoading?: boolean,
  createroiisSuccess?: boolean,
  createroiisError?: boolean,

  updateroiisLoading?: boolean,
  updateroiisSuccess?: boolean,
  updateroiisError?: boolean,

  alertText?: any,
  showAlert?: boolean,
  alertType?: string,



}

// Define the initial state of the roi using that type
const initialState: RoiState = {
  roiDetails: null,

  Roi: [],
  userRoi: [],


  roiisLoading: false,
  roiisSuccess: false,
  roiisError: false,
  alertText: '',
  showAlert: false,
  alertType: '',

  createroiisLoading: false,
  createroiisSuccess: false,
  createroiisError: false,

  updateroiisLoading: false,
  updateroiisSuccess: false,
  updateroiisError: false,


}

export const Roilice = createSlice({
  name: 'roi',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearRoi: (state, action) => {
      state.roiisSuccess = false
      state.Roi = []
      state.roiDetails = null
      state.roiisError = false
      state.updateroiisSuccess = false
      state.createroiisLoading = false
      state.createroiisSuccess = false
      state.updateroiisSuccess = false
    },
  },
  extraReducers: (builder) => {
    // registration build case
    builder.addCase(getAllRoi.pending, (state, action) => {
      state.roiisLoading = true
    })
    builder.addCase(getAllRoi.fulfilled, (state, action) => {
      state.roiisSuccess = true
      state.roiisLoading = false
      state.Roi = action.payload
    })
    builder.addCase(getAllRoi.rejected, (state, action) => {
      state.roiisSuccess = false
      state.roiisError = true
      state.roiisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user roi
    builder.addCase(CreateRoi.pending, (state, action) => {
      state.createroiisLoading = true

    })
    builder.addCase(CreateRoi.fulfilled, (state, action) => {
      state.roiDetails = action.payload
      state.alertText = 'roi created succesfully'
      state.showAlert = true
      state.createroiisLoading = false
      state.createroiisSuccess = true
      state.alertType = 'success'
    })
    builder.addCase(CreateRoi.rejected, (state, action) => {
      state.roiisSuccess = false
      state.roiisError = true
      state.createroiisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    // create user roi
    builder.addCase(GetSingleRoi.pending, (state, action) => {
      state.roiisLoading = true

    })
    builder.addCase(GetSingleRoi.fulfilled, (state, action) => {
      state.roiDetails = action.payload
      state.alertText = 'roi created succesfully'
      state.showAlert = true
      state.roiisLoading = false
      state.roiisSuccess = true
      state.alertType = 'success'
    })
    builder.addCase(GetSingleRoi.rejected, (state, action) => {
      state.roiisSuccess = false
      state.roiisError = true
      state.roiisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // GetSingleRoi
    // GetSingleRoiOfAUser

    builder.addCase(GetSingleRoiOfAUser.pending, (state, action) => {
      // state.roiisLoading = true
    })
    builder.addCase(GetSingleRoiOfAUser.fulfilled, (state, action) => {
      state.roiisSuccess = true
      state.roiisLoading = false
      state.Roi = action.payload
    })
    builder.addCase(GetSingleRoiOfAUser.rejected, (state, action) => {
      state.roiisSuccess = false
      state.roiisError = true
      state.roiisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })
    // DeleteRoi slice

    builder.addCase(DeleteRoi.pending, (state, action) => {

    })
    builder.addCase(DeleteRoi.fulfilled, (state, action) => {

      state.Roi = state.Roi.filter((x: roiDeleteType) => x._id !== action.payload);
      state.alertText = 'roi deleted succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(DeleteRoi.rejected, (state, action) => {
      state.roiisSuccess = false
      state.roiisError = true
      state.roiisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

    builder.addCase(UpdateRoi.pending, (state, action) => {
      state.updateroiisLoading = true
    })
    builder.addCase(UpdateRoi.fulfilled, (state, action) => {
      state.updateroiisSuccess = true
      state.updateroiisLoading = false
      state.roiDetails = action.payload
      state.alertText = 'roi Update succesfully'
      state.showAlert = true
      state.alertType = 'success'
    })
    builder.addCase(UpdateRoi.rejected, (state, action) => {
      state.roiisSuccess = false
      state.roiisError = true
      state.updateroiisLoading = false
      state.showAlert = true
      state.alertType = 'danger'
      state.alertText = action.payload

    })

  },
})

export const { clearRoi } = Roilice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.roi.value

export default Roilice.reducer
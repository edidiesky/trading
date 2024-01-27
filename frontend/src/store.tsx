import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import transactionSlice from './features/transaction/transactionSlice'
import investmentsSlice from './features/investments/investmentsSlice'
import roiSlice from './features/roi/roiSlice'
// ...

export const store = configureStore({
  reducer: {
    auth: authSlice,
    transaction: transactionSlice,
    investments: investmentsSlice,
    roi: roiSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
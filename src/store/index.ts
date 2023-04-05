import { configureStore } from '@reduxjs/toolkit'
import calculator from '../features/calculator/calculatorSlice'
import dragDrop from '../features/dragDrop/dragDropSlice'

export const store = configureStore({
  reducer: { calculator, dragDrop },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { ModeType } from './types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  mode: ModeType;
}

const initialState: IInitialState = {
  mode: 'Constructor',
}

export const dragDropSlice = createSlice({
  name: 'dragDrop',
  initialState,
  reducers: {
    setMode(state, { payload }: PayloadAction<ModeType>) {
      state.mode = payload
    },
  },
})

export const { setMode } = dragDropSlice.actions
export default dragDropSlice.reducer

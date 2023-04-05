import { OperationType } from './types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toFloat, compute } from './utils/calculator.function'

interface IInitialState {
  operation: OperationType;
  operandOne: string;
  operandTwo: string;
}

const initialState: IInitialState = {
  operation: null,
  operandOne: '',
  operandTwo: '',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit(state, { payload }: PayloadAction<string>) {
      if (!state.operation || state.operation === '=') {
        if (state.operation === '=') {
          state.operandOne = payload
          state.operation = null
        } else {
          state.operandOne += payload
        }
      } else {
        if (state.operandTwo === '0' || state.operandTwo === '-0') {
          state.operandTwo = payload
        } else {
          state.operandTwo += payload
        }
      }
    },
    addFloat(state, { payload }:PayloadAction<string>) {
      const { current, next, operation } = toFloat(
        state.operandOne,
        state.operandTwo,
        state.operation,
        payload
      )

      state.operandOne = current
      state.operandTwo = next
      state.operation = operation
    },
    setOperation(state, { payload }: PayloadAction<OperationType>) {
      if (state.operandOne == 'Не определено') return
      if (payload == '-' && !state.operandOne) {
        state.operandOne = '-'
      } else if (!state.operandOne && payload && payload !== '=') {
        state.operandOne = '0'
        state.operation = payload
      } else if (state.operandOne == '-') return
      else state.operation = payload
    },
    setOperands(state, { payload }: PayloadAction<string>) {
      if (!state.operation || state.operation == '=') {
        state.operandOne = payload
      } else {
        state.operandTwo = payload
      }
    },
    setOperandOne(state, { payload }: PayloadAction<string>) {
      state.operandOne = payload
    },
    getCompute(state) {
      if (state.operandOne && state.operandTwo) {
        state.operandOne = compute(
          state.operandOne,
          state.operandTwo,
          state.operation
        )
        state.operation = '='
        state.operandTwo = ''
      }
    },
  },
})

export const {
  addDigit,
  addFloat,
  setOperation,
  setOperandOne,
  getCompute,
  setOperands,
} = calculatorSlice.actions
export default calculatorSlice.reducer

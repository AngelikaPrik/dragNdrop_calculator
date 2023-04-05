import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setOperands, setOperation } from '../calculatorSlice'
import { ResultInput } from '../uiModels'
import { validate } from '../utils/result.function'

export const Result = () => {
  const [inputValue, setInputValue] = useState('')
  const { mode } = useAppSelector(state => state.dragDrop)
  const { operation, operandOne, operandTwo } = useAppSelector(
    state => state.calculator
  )
  const dispatch = useAppDispatch()

  const onInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = validate(e.target.value)
    dispatch(setOperands(value))
  }

  const onFocus = (): void => {
    if (operation == '=') {
      setInputValue('')
      dispatch(setOperation(null))
    }
  }

  useEffect(() => {
    if (operandTwo) setInputValue(operandTwo)
    else if (operandOne) setInputValue(operandOne)
    else if (!operandOne && !operandTwo && (operation == '=' || !operation)) {
      setInputValue('')
    }
  }, [operandOne, operandTwo])

  useEffect(() => {
    if (operation == '=') setInputValue(operandOne)
    else setInputValue('')
  }, [operation])

  const fontSize = (): Record<'fontSize', string> => {
    const input = inputValue.length,
      opOne = operandOne.length,
      opTwo = operandTwo.length

    if ((input || opTwo || opOne) < 9) {
      return { fontSize: '3.6rem' }
    } else if ((input || opTwo || opOne) < 13) {
      return { fontSize: '2.4rem' }
    } else return { fontSize: '1.9rem' }
  }

  const isConstructor = mode == 'Constructor'
  return (
    <ResultInput
      disabled={isConstructor}
      placeholder={operandTwo || operandOne || '0'}
      value={isConstructor ? '0' : inputValue}
      onChange={onInput}
      sx={fontSize}
      onFocus={onFocus}
    />
  )
}

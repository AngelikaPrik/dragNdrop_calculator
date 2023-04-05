import { Stack } from '@mui/system'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { setOperation } from '../calculatorSlice'
import { OperationType } from '../types'
import { OperationBtn } from '../uiModels'
import { useEffect } from 'react'

const operations: OperationType[] = ['/', 'х', '-', '+']

export const Operations = () => {
  const { mode } = useAppSelector(state => state.dragDrop)
  const { operation } = useAppSelector(state => state.calculator)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (mode == 'Constructor') dispatch(setOperation(null))
  }, [mode])

  return (
    <Stack direction="row" spacing="0.8rem">
      {operations.map((d, i) => (
        <OperationBtn
          key={i}
          disableRipple
          disabled={mode == 'Constructor'}
          onClick={() => dispatch(setOperation(d))}
          sx={{
            background: operation == d ? '#5D5FEF' : '#fff',
            color: operation == d ? '#fff' : '#000',
          }}
        >
          {d}
        </OperationBtn>
      ))}
    </Stack>
  )
}

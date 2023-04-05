import { Grid } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addDigit, addFloat } from '../calculatorSlice'
import { OperationBtn } from '../uiModels'

const digits: DigitType[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ',']

export const Digits = () => {
  const { mode } = useAppSelector(state => state.dragDrop)
  const dispatch = useAppDispatch()

  const onClick = (digit: DigitType): void => {
    const val = digit.toString()
    if (val === ',') {
      dispatch(addFloat(val))
    } else {
      dispatch(addDigit(val))
    }
  }

  return (
    <Grid container spacing="0.8rem">
      {digits.map((d, i) => (
        <Grid item xs={(d as number) >= 1 ? 4 : d == 0 ? 8 : 4} key={i}>
          <OperationBtn
            disabled={mode == 'Constructor'}
            disableRipple
            onClick={() => onClick(d)}
          >
            {d}
          </OperationBtn>
        </Grid>
      ))}
    </Grid>
  )
}

type DigitType = string | number;

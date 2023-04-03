import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getCompute } from '../calculatorSlice';
import { ComputeButton } from '../uiModels';

export const Compute = () => {
  const { mode } = useAppSelector(state => state.dragDrop);
  const dispatch = useAppDispatch();

  return (
    <ComputeButton
      disabled={mode == 'Constructor'}
      disableRipple
      onClick={() => dispatch(getCompute())}
    >
      =
    </ComputeButton>
  );
};

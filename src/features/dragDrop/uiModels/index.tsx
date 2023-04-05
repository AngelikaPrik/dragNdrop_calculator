import React from 'react'
import { Box, Container, ContainerProps, Stack, styled } from '@mui/material'
import { IMyBox, IMyStack } from '../types'

export const DragContainer = styled(Container)({
  background: '#fff',
  padding: '3rem',
  borderRadius: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  boxShadow: '0 0 10px #5D5FEF',
}) as React.FC<ContainerProps>

export const MyBox = (props: IMyBox) => {
  const {
    isBuilder,
    iRef,
    disableResult,
    draggableProps,
    dragHandleProps,
    disactiveDraggedItems: disActive,
    mode,
  } = props

  const important = ' !important'
  const cursor =
    (mode === 'Runtime'
      ? 'pointer'
      : disableResult || disActive
      ? 'no-drop'
      : 'grab') + important
  const transform = (!isBuilder || disableResult ? 'none' : '') + important
  const shadow =
    isBuilder || disActive
      ? ''
      : `0px 2px 4px rgba(0, 0, 0, 0.06), 
		  0px 4px 6px rgba(0, 0, 0, 0.1)`

  return (
    <Box
      ref={iRef}
      sx={{
        cursor,
        '& *': { cursor },
        transform,
        pointerEvents: disActive ? 'none' + important : '',
        backgroundColor: '#fff',
        padding: '.4rem',
        borderRadius: '.4rem',
        opacity: disActive ? '0.4' : '1',
        boxShadow: shadow,
      }}
      {...draggableProps}
      {...dragHandleProps}
    >
      {props.children}
    </Box>
  )
}

export const MyStack = (props: IMyStack) => {
  const { iRef, droppableProps, isDraggingOver, isDashed } = props
  return (
    <Stack
      spacing="1.2rem"
      sx={{
        background: isDraggingOver ? '#F0F9FF' : '#fff',
        position: 'relative',
        outline: isDashed ? ' 2px dashed #C4C4C4' : '',
        width: '24rem',
        height: '44.8rem',
        borderRadius: '0.6rem',
        overflow: 'hidden'
      }}
      ref={iRef}
      {...droppableProps}
    >
      {props.children}
    </Stack>
  )
}

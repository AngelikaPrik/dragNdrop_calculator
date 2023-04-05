import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { SIDEBAR_ITEMS } from '../constants'
import { setMode } from '../dragDropSlice'
import { onDragEnd } from '../utils/dragDrop.function'
import { DroppableList } from './DroppableList'
import { ColumnNameType, IDragComponent, ModeType } from '../types'
import { DragContainer } from '../uiModels'
import { useAppDispatch, useAppSelector } from '@hooks/redux'

interface IColumn {
  id: ColumnNameType
  items: IDragComponent[]
}

export const DragDrop = () => {
  const [builder, setBuilder] = useState<IDragComponent[]>([])
  const { mode } = useAppSelector(state => state.dragDrop)
  const dispatch = useAppDispatch()

  const columns: IColumn[] = [
    { id: 'sidebar', items: SIDEBAR_ITEMS },
    { id: 'builder', items: builder },
  ]

  return (
    <DragDropContext onDragEnd={res => onDragEnd(res, setBuilder)}>
      <DragContainer maxWidth="sm">
        {columns.map(column => (
          <DroppableList
            key={column.id}
            droppableId={column.id}
            items={column.items}
            mode={mode}
            setMode={(mode: ModeType) => dispatch(setMode(mode))}
          />
        ))}
      </DragContainer>
    </DragDropContext>
  )
}

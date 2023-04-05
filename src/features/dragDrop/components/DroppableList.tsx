import { Box, Stack } from '@mui/material'
import React from 'react'
import {
  DraggableProvided,
  DraggableRubric,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd'
import { DragEmptyInfo } from './DragEmptyInfo'
import { DragDropTabs } from './DragDropTabs'
import { IDragComponent, ModeType } from '../types'

import { DraggableItem } from './DraggableItem'
import { MyStack } from '../uiModels'

const CloneItem =
  (items: IDragComponent[]) =>
  (
    provided: DraggableProvided,
    sn: DraggableStateSnapshot,
    rubric: DraggableRubric
  ) => {
    const item: IDragComponent = items[rubric.source.index]
    return (
      <Box
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)"
        p=".4rem"
        borderRadius=".4rem"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        sx={provided.draggableProps.style}
      >
        {item.component}
      </Box>
    )
  }


export const DroppableList = (props: IDroppableList) => {
  const { droppableId, items, mode, setMode } = props
  const shouldHidden = (): boolean => {
    return droppableId === 'sidebar' && mode === 'Runtime'
  }

  return (
    <Stack>
      {droppableId === 'builder' && (
        <DragDropTabs mode={mode} setMode={setMode} />
      )}
      {!shouldHidden() && (
        <Droppable droppableId={droppableId} renderClone={CloneItem(items)}>
          {(provided: DroppableProvided, sn: DroppableStateSnapshot) => {
            return (
              <MyStack
                iRef={provided.innerRef}
                isDraggingOver={sn.isDraggingOver}
                isDashed={droppableId === 'builder' && !items.length}
                droppableProps={provided.droppableProps}
              >
                {items.length ? (
                  items.map((item, i) => {
                    const shouldRenderClone =
                      item.id === sn.draggingFromThisWith &&
                      droppableId !== 'builder'
                    return (
                      <React.Fragment key={item.id}>
                        {shouldRenderClone ? (
                          <Box p=".4rem">{item.component}</Box>
                        ) : (
                          <DraggableItem
                            item={item}
                            draggableId={item.id}
                            index={i}
                            droppableId={droppableId}
                            mode={mode}
                          />
                        )}
                      </React.Fragment>
                    )
                  })
                ) : (
                  <DragEmptyInfo />
                )}
                {provided.placeholder}
              </MyStack>
            )
          }}
        </Droppable>
      )}
    </Stack>
  )
}

interface IDroppableList {
  droppableId: string;
  items: IDragComponent[];
  mode: ModeType;
  setMode: (m: ModeType) => void;
}

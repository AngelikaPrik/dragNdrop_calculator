import React from 'react';
import { Draggable, DraggableId, DraggableProvided, DroppableId } from 'react-beautiful-dnd';
import { IDragComponent, ModeType } from '../types';
import { MyBox } from '../uiModels';

export const DraggableItem = (props: IDraggableItem) => {
  const { item, draggableId, index, droppableId, mode } = props;

  const disableResult = (): boolean => {
    return droppableId === 'builder' && item.name === 'result';
  };
  const isDraggedComponent = (): boolean => {
    return droppableId === 'sidebar' && item.isDragged;
  };
  const isDragDisabled = (): boolean => {
    return disableResult() || isDraggedComponent() || mode == 'Runtime';
  };

  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      disableInteractiveElementBlocking
      isDragDisabled={isDragDisabled()}
    >
      {(provided:DraggableProvided) => {
        return (
          <MyBox
            iRef={provided.innerRef}
            draggableProps={provided.draggableProps}
            dragHandleProps={provided.dragHandleProps}
            disactiveDraggedItems={isDraggedComponent()}
            disableResult={disableResult()}
            isBuilder={droppableId === 'builder'}
            mode={mode}
          >
            {item.component}
          </MyBox>
        );
      }}
    </Draggable>
  );
};

interface IDraggableItem {
  item: IDragComponent;
  draggableId: DraggableId;
  droppableId: DroppableId;
  index: number;
  mode: ModeType;
}

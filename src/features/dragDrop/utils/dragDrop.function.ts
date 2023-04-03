import { v4 as uuid } from 'uuid';
import { DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { SIDEBAR_ITEMS } from '../constants';
import { IDragComponent } from '../types';

const remove = <T extends IDragComponent>(
  initialItems: T[],
  list: T[],
  idx: number
): T[] => {
  const newBuilder = [...list];
  const [removed] = newBuilder.splice(idx, 1);
  initialItems.find(i => i.name === removed.name && (i.isDragged = false));
  return newBuilder;
};

const reorder = <T extends IDragComponent[]>(
  list: T,
  startIdx: number,
  endIdx: number
): T => {
  if (list[startIdx].name === 'result' || list[endIdx].name === 'result') {
    return list;
  }

  const [removed] = list.splice(startIdx, 1);
  list.splice(endIdx, 0, removed);
  return list;
};

const copy = <T extends IDragComponent[]>(
  source: T,
  destination: T,
  dropSource: DraggableLocation,
  dropDestination: DraggableLocation
): T => {
  const item = source[dropSource.index];
  item.isDragged = true;
  let i;
  if (item.name === 'result') i = 0;
  else if (destination[0]?.name === 'result' && dropDestination.index == 0)
    i = 1;
  else i = dropDestination.index;

  destination.splice(i, 0, { ...item, id: uuid() });
  return destination;
};

export const onDragEnd = (
  result: DropResult,
  setBuilder: React.Dispatch<React.SetStateAction<IDragComponent[]>>
): void => {
  const { source, destination } = result;

  if (!destination) return;

  if (source.droppableId == 'sidebar' && destination.droppableId == 'sidebar') {
    return;
  }

  switch (source.droppableId) {
    case destination.droppableId:
      setBuilder((state: IDragComponent[]) =>
        reorder(state, source.index, destination.index)
      );
      break;
    case 'sidebar':
      setBuilder((state: IDragComponent[]) =>
        copy(SIDEBAR_ITEMS, state, source, destination)
      );
      break;
    case 'builder':
      setBuilder((state: IDragComponent[]) =>
        remove(SIDEBAR_ITEMS, state, source.index)
      );
      break;
  }
};

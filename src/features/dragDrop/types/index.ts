import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
  DroppableProvidedProps,
} from 'react-beautiful-dnd';

export interface IMyBox {
  disactiveDraggedItems?: boolean;
  isBuilder?: boolean;
  iRef?: (element: HTMLElement | null) => void;
  disableResult?: boolean;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | null | undefined;
  children: JSX.Element;
  mode?: ModeType;
}

export interface IMyStack {
  iRef?: (element: HTMLElement | null) => void;
  droppableProps?: DroppableProvidedProps;
  isDraggingOver?: boolean;
  isDashed?: boolean;
  children: React.ReactNode;
}

export interface IDragComponent {
  id: string;
  component: JSX.Element;
  isDragged: boolean;
  name: string;
}
export type ModeType = 'Constructor' | 'Runtime';

import { Result, Operations, Digits, Compute } from "../calculator";
import { IDragComponent } from "./types";

export const SIDEBAR_ITEMS: IDragComponent[] = [
  {
    id: "0",
    component: <Result />,
    isDragged: false,
    name: "result",
  },
  {
    id: "1",
    component: <Operations />,
    isDragged: false,
    name: "operations",
  },
  {
    id: "2",
    component: <Digits />,
    isDragged: false,
    name: "digits",
  },
  {
    id: "3",
    component: <Compute />,
    isDragged: false,
    name: "compute",
  },
];

import { OperationType } from "../types";

export function compute(
  current: string,
  next: string,
  operation: OperationType
): string {
  const num1: number = Number(current.replace(/\,/g, "."));
  const num2: number = Number(next.replace(/\,/g, "."));

  let result: number;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "х":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return "";
  }

  if (Number.isInteger(result)) {
    current = result.toString();
  } else if (!Number.isFinite(result)) {
    current = "Не определено";
  } else {
    const roundedResult: number = parseFloat(result.toFixed(12));
    current = roundedResult.toString();
  }
  return current.replace(/\./g, ",");
}

interface IToFloat {
  current: string;
  next: string;
  operation: OperationType;
}
export function toFloat(
  current: string,
  next: string,
  operation: OperationType,
  payload: string
): IToFloat {
  const isDotForOne = payload === "," && current.includes(payload);
  const isDotForTwo = payload === "." && next.includes(payload);

  if (operation == "=" && payload === ",") {
    operation = null;
  }

  if (!operation || operation == "=") {
    if (!current || !operation) current = "0" + payload;
    else if (!isDotForOne) current += payload;
    else return { current, next, operation };
  } else {
    if (!next) next = "0" + payload;
    else if (isDotForTwo) return { current, next, operation };
    else next += payload;
  }

  return { current, next, operation };
}

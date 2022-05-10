import { createArray } from "../utils/array";
import { random } from "../utils/random";

type Point = { y: number; x: number };

export const createShip = (shipLenght: number, maxSizeField: number): Point[] => {
  const position = random(0, 2) % 2 === 0 ? "horizontal" : "vertical";

  return position === 'horizontal' ? createHorizontalShip(shipLenght, maxSizeField) : createVerticalShip(shipLenght,maxSizeField)
};

const createHorizontalShip = (length: number, maxSize: number) => {
  const maxX = maxSize - length -1;
  const maxY = maxSize - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(length, (i)=>{
    return {y: headY, x:headX + i}
  })
};

const createVerticalShip = (length: number, maxSize: number) => {
  const maxY = maxSize - length -1;
  const maxX = maxSize -1 ;

  const headY = random(0, maxX);
  const headX = random(0, maxY);

  return createArray(length, (i)=>{
    return {y: headY + i, x: headX}
  })
};
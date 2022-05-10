import * as React from "react";
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "../logic/cellState";

type cellStateMapProps = {
  [key: number]: string;
};

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};

const cellStateMap: cellStateMapProps = {
  [WATER]: "",
  [SHIP]: "",
  [CHECKED_WATER]: "🌊",
  [CHECKED_SHIP]: "🔥",
};

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button className="cell" onClick={() => handleClick(y, x)}>
      {cellStateMap[value]}
    </button>
  );
};

type BattlefieldProps = {
  matrix: number[][];
  onFire: (y: number, x: number) => void;
};

export const Battlefield = ({ matrix, onFire }: BattlefieldProps) => {
  return (
    <div className="field">
      {matrix.map((line, lineNumber) => (
        <div className="line" key={lineNumber}>
          {line.map((value, index) => (
            <Cell
              key={`${lineNumber}${index}`}
              value={value}
              y={lineNumber}
              x={index}
              handleClick={onFire}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

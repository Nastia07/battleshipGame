import { useState } from "react";
import { createArray } from "../utils/array";
import { createShip } from "./battlefield";
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "./cellState";
const MAX_MATRIX_LENGHT = 10;

const createEmptyBattlefield = () =>
  createArray(MAX_MATRIX_LENGHT, () => createArray(MAX_MATRIX_LENGHT, () => 0));

const createBattlefield = () => {
  const battlefield = createEmptyBattlefield();
  const newShip = createShip(4, MAX_MATRIX_LENGHT);

  newShip.forEach(({ y, x }) => {
    battlefield[y][x] = SHIP;
  });
  return battlefield;
};

export const useGameState = () => {
  const [state, setState] = useState({
    matrix: createBattlefield(),
    turn: 0,
    won: false,
  });

  const { turn, matrix, won } = state;
  const reset = () => {
    setState({
      matrix: createBattlefield(),
      turn: 0,
      won: false,
    });
  };

  const onFire = (y: number, x: number) => {
    const cell = state.matrix[y][x];

    if (cell === CHECKED_WATER || cell === CHECKED_SHIP) {
      return;
    }
    const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;
    state.matrix[y][x] = newState;
    const won = state.matrix.every(line => line.every(x => x!== SHIP))
    setState({ ...state, turn: state.turn + 1, won });
  };

  return { turn, reset, matrix, onFire, won };
};

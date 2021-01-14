import { React, useState } from "react";
import Square from "./Square.jsx";

function Board(props) {
  const [move, setMove] = useState([
    { value: "X", x: 2, y: 3, win: true },
    { value: "O", x: 3, y: 4, win: false },
    { value: "X", x: 4, y: 5, win: true },
    { value: "O", x: 5, y: 6, win: false },
    { value: "X", x: 6, y: 7, win: true },
    { value: "O", x: 7, y: 8, win: false },
  ])
  function renderSquare(i, j, move) {
    let value = '';
    let isHighLight = false;
    const seeking = () => {
      move.map((item) => {
        if (item.x == i && item.y == j) {
          value = item.value;
          isHighLight = item.win;
        }
      })
    }
    seeking();
    return (
      <Square
        highLight={isHighLight}
        value={value}
      />
    );
  }
  const boardSize = 10;
  const board = [];
  const row = [];
  for (let i = 0; i < boardSize; i++) {
    row[i] = [];
    for (let j = 0; j < boardSize; j++) {
      row[i].push(
        renderSquare(i, j, move)
      );
    }
    board.push(<div className="board-row">{row[i]}</div>);
  }
  return <div className="game-board-his">{board}</div>;
}

export default Board;

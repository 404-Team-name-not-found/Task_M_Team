import "./kanban.css";
import { useState, useEffect, useContext } from "react";
import ColumnHeader from "../ColumnHeader/ColumnHeader";
import Card from "../Card/Card";
import Board, { moveCard } from "@asseinfo/react-kanban";
import BoardContext from "../../Context/BoardContext";

export default function Kanban() {
  const [selectedBoard, setSelectedBoard] = useContext(BoardContext);
  const [controlledBoard, setBoard] = useState(selectedBoard);

  useEffect(() => {
    setBoard(selectedBoard);
  }, [selectedBoard]);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  const handleColumnHeaderChange = (e, id) => {
    const newBorad = { ...controlledBoard };
    newBorad.columns.map((column) => {
      if (column.id === id) return (column.title = e.target.value);
    });
    setBoard(newBorad);
  };

  return (
    <Board
      onCardDragEnd={handleCardMove}
      disableColumnDrag
      renderCard={({ title, id }, { dragging }) => (
        <Card dragging={dragging} key={id}>
          {title}
        </Card>
      )}
      renderColumnHeader={({ title, color, cards, id }) => (
        <ColumnHeader
          title={title}
          color={color}
          number={cards.length}
          key={id}
          onchange={(e) => handleColumnHeaderChange(e, id)}
        ></ColumnHeader>
      )}
    >
      {controlledBoard}
    </Board>
  );
}

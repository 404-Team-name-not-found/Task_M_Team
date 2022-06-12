import "./Kanban.css";
import { useState, useEffect, useContext } from "react";
import ColumnHeader from "../ColumnHeader/ColumnHeader";
import Card from "../Card/Card";
import Board, { moveCard } from '@asseinfo/react-kanban'
import BoardContext from "../../Context/BoardContext";

export default function Kanban() {
    const [selectedBoard, setSelectedBoard] = useContext(BoardContext);
    const [controlledBoard, setBoard] = useState(selectedBoard);
    useEffect(() => {
        setBoard(selectedBoard);
    }, [selectedBoard])
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }

    return (
        <Board
            onCardDragEnd={handleCardMove}
            disableColumnDrag
            renderCard={({ title }, { dragging }) => (
                <Card dragging={dragging}>
                    {title}
                </Card>
            )}
            renderColumnHeader={({ title, color, cards }) => (
                <ColumnHeader title={title} color={color} number={cards.length} ></ColumnHeader>
            )}
        >
            {controlledBoard}
        </Board>
    );
}
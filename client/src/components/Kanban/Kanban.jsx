import "./Kanban.css";
import { useState, useEffect } from "react";
import ColumnHeader from "../ColumnHeader/ColumnHeader";
import Card from "../Card/Card";
import Board, { moveCard } from '@asseinfo/react-kanban'
import mockData from "../../Data/mockData";

export default function Kanban() {
    const [controlledBoard, setBoard] = useState(mockData[0]);
    useEffect(() => {
        console.log(controlledBoard.columns[0].cards);
    }, [controlledBoard])
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
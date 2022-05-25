import "./Kanban.css";
import { useState } from "react";
import Card from "../Card/Card";
import Board from '@asseinfo/react-kanban'
import mockData from "../../Data/mockData";

export default function Kanban() {
    const [board, setBoard] = useState(mockData[0]);

    return (
        <Board
            initialBoard={board}
            renderCard={({ title }, { dragging }) => (
                <Card dragging={dragging}>
                    {title}
                </Card>
            )}
        ></Board>
    )
}
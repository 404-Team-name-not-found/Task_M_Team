import React, { useContext, useState } from 'react';
import Kanban from '../components/Kanban/Kanban';
import ListBox from '../components/Listbox/Listbox';
import BoardContext from '../Context/BoardContext';
import mockData from '../Data/mockData';

const KanbanPage = () => {
    const [selectedBoard, setSelectedBoard] = useState(mockData[0]);

    return (
        <BoardContext.Provider value={[selectedBoard, setSelectedBoard]}>
            <ListBox />
            <Kanban />
        </BoardContext.Provider>
    );
};

export default KanbanPage;
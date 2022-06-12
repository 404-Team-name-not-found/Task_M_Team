import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import mockData from "../../Data/mockData";

const ListGrid = styled.div`
display: flex;
justify-content: center;
justify-items: center;
  align-items: stretch;
  gap: 1rem;
`;

const removeFromList = (list, index) => {
  console.log(list)
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const DragList = () => {
  const [data, setData] = useState(mockData);
  
  const onDragEnd = result => {
    if (!result.destination) return
    const { source, destination } = result

    const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
    const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

    const sourceTask = [...data[sourceColIndex].tasks]
    const destinationTask = [...data[destinationColIndex].tasks]
    console.log({sourceTask})
    console.log({destinationTask})
    
    if (source.droppableId !== destination.droppableId){
        const [removed] = sourceTask.splice(source.index, 1)
        destinationTask.splice(destination.index, 0, removed)
        data[sourceColIndex].tasks = sourceTask
        data[destinationColIndex].tasks = destinationTask
    }
    else {
        const [removed] = sourceTask.splice(source.index, 1)
        sourceTask.splice(destination.index, 0, removed)
        data[sourceColIndex].tasks = sourceTask
    }
    
    setData(data)
}

  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {data.map((section) => (
            <DraggableElement
              elements={section.tasks}
              key={section.id}
              id = {section.id}
              prefix={section.title}
            />
          ))}
        </ListGrid>
      </DragDropContext>
  );

}

export default DragList;

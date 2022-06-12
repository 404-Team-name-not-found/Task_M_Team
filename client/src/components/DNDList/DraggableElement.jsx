import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";

const ColumnHeader = styled.div`
  background: #21213E;
  box-shadow: 0px 20px 70px rgba(86, 89, 146, 0.1);
  border-radius: 10px 10px 0px 0px;

  padding: 1rem;
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  text-transform: capitalize;
  justify-content: space-between;
  align-items: center;
`;

const DroppableStyles = styled.div`
  background: #121231;
  box-shadow: 0px 20px 70px rgba(86, 89, 146, 0.1);
  border-radius: 10px;
  padding: 10px;
  width: 20rem;
`;

const DraggableElement = ({ prefix, elements, id }) => (
  <DroppableStyles>
    <ColumnHeader>{prefix}</ColumnHeader>
    <Droppable droppableId={`${id}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
);

export default DraggableElement;

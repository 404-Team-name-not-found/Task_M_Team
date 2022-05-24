import { Draggable } from "react-beautiful-dnd";
import { LoremIpsum } from "lorem-ipsum";
import { generateFromString } from "generate-avatar";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import Card from "../Card";

const ListItem = ({ item, index }) => {

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? '0.5' : '1'
          }}
        >
        <Card>
          {item.id}
        </Card>
      </div>
      )}
    </Draggable>
  );
};

export default ListItem;


// <DragItem
// ref={provided.innerRef}
// snapshot={snapshot}
// {...provided.draggableProps}
// {...provided.dragHandleProps}
// >
// <CardHeader>{randomHeader}</CardHeader>
// <span>Content</span>
// <CardFooter>
//   <span>{item.content}</span>
//   <Author>
//     {item.id}
//     <Avatar
//       src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
//     />
//   </Author>
// </CardFooter>
// </DragItem>

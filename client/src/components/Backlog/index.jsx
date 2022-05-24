import './Backlog.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../Data/mockData'
import { useState } from 'react'
import Card from '../Card'
import { v4 as uuidv4 } from 'uuid'

const makingBacklogData = () => {
    const newData = []
    mockData.map(section=> {
        section.tasks.map((task) => {
            newData.push(task);
        })
    })
    return(newData);
}

const Backlog = () => {
    const [data, setData] = useState(mockData)
    const [bgData, setbdData] = useState(makingBacklogData(data))
    const [count, setCount] = useState(0)
    const id = uuidv4();

    console.log(bgData)
    
    const onDragEnd = result => {
        const newItems = Array.from(bgData);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);

        setbdData(newItems);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='backlog'>
                <div className='title'> Backlog</div>
                    {
                        <Droppable key={id} droppableId={id}>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className="content">
                                        {
                                            bgData.map((task,index) => (
                                                    <Draggable
                                                        key={task.id}
                                                        draggableId={task.id}
                                                        index={index}
                                                    >
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
                                                                    {task.title}
                                                                </Card>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                        }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    }
            </div>
        </DragDropContext>
    )
}

export default Backlog
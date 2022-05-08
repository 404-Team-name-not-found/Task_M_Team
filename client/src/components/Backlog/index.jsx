import './Backlog.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../mockData'
import { useState } from 'react'
import Card from '../card'
import { v4 as uuidv4 } from 'uuid'


const Backlog = () => {
    const [data, setData] = useState(mockData)
    const id = uuidv4();
    
    const onDragEnd = result => {
        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            setData(data)
        }
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
                                            data.map(section => (
                                                section.tasks.map((task, index) => (
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
                                                                    {section.title}
                                                                </Card>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
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
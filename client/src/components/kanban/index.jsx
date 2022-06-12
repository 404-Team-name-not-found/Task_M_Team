import './kanban.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../Data/mockData'
import { useState } from 'react'
import Card from '../Card'

const Kanban = () => {
    const [data, setData] = useState(mockData)
    
    const onDragEnd = result => {
        if (!result.destination) return
        const { source, destination } = result

        const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
        const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

        const sourceTask = [...data[sourceColIndex].tasks]
        const destinationTask = [...data[destinationColIndex].tasks]
        
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
            <div className="kanban">
                {
                    data.map(section => (
                        <Droppable key={section.id} droppableId={section.id}>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps} className="section"
                                    ref={provided.innerRef}>
                                    <div className="title">
                                        <div className={section.color}></div>
                                        {section.title}
                                        <div className="count">{section.tasks.length}</div> 
                                    </div>
                                    <div className="content">
                                        {
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
                                                            </Card>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
    )
}

export default Kanban
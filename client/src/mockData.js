import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: ' Open',
        color: 'green',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' In progress',
        color: 'blue',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn CSS'
            },
            {
                id: uuidv4(),
                title: 'Learn Golang'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' Resolved',
        color: 'red',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn HTML'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' Closed',
        color: 'yellow',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn HTML'
            }
        ]
    }
]

export default mockData
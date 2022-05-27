import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        columns: [
            {
                id: 0,
                title: "Available",
                color: "orange",
                cards: [
                    {
                        id: 0,
                        title: "Learn HTML",
                        description: "Do it!"
                    },
                    {
                        id: 1,
                        title: "Learn CSS",
                        description: "Do it!"
                    },
                    {
                        id: 2,
                        title: "Learn JS",
                        description: "Do it!"
                    }
                ]
            },
            {
                id: 1,
                title: "Open",
                color: "green",
                cards: [
                    {
                        id: 3,
                        title: "Learn SQL",
                        description: "Do it!"
                    },
                    {
                        id: 4,
                        title: "Learn MongoDB",
                        description: "Do it!"
                    },
                    {
                        id: 5,
                        title: "Learn Reddis",
                        description: "Do it!"
                    }
                ]
            },
            {
                id: 2,
                title: "In progress",
                color: "blue",
                cards: [
                    {
                        id: 6,
                        title: "Learn English",
                        description: "Do it!"
                    },
                    {
                        id: 7,
                        title: "Learn Spanish",
                        description: "Do it!"
                    },
                    {
                        id: 8,
                        title: "Learn French",
                        description: "Do it!"
                    }
                ]
            },
            {
                id: 3,
                title: "Resolved",
                color: "red",
                cards: [
                    {
                        id: 9,
                        title: "Learn how to backflip",
                        description: "Do it!"
                    },
                    {
                        id: 10,
                        title: "Learn how to frontflip",
                        description: "Do it!"
                    },
                    {
                        id: 11,
                        title: "Learn both",
                        description: "Do it!"
                    }
                ]
            },
            {
                id: 4,
                title: "Closed",
                color: "yellow",
                cards: [
                    {
                        id: 12,
                        title: "Learn how to mathematicate",
                        description: "Do it!"
                    },
                    {
                        id: 13,
                        title: "Learn how to spell",
                        description: "Do it!"
                    },
                    {
                        id: 14,
                        title: "Learn program",
                        description: "Do it!"
                    }
                ]
            },
        ]
    }
]

export default mockData
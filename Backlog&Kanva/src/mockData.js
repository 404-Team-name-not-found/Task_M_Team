import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: " To do",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn JavaScript",
        assignedTo: "saar",
        creator: "roy",
        sprint: "3",
      },
      {
        id: uuidv4(),
        title: "Learn Git",
        assignedTo: "alon",
        creator: "shlomi",
        sprint: "3",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
        assignedTo: "bar",
        creator: "ronit",
        sprint: "3",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
        assignedTo: "saar",
        creator: "ronit",
        sprint: "3",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
        assignedTo: "",
        creator: "",
        sprint: "2",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
        assignedTo: "",
        creator: "",
        sprint: "2",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn CSS",
        assignedTo: "",
        creator: "ronit",
        sprint: "2",
      },
      {
        id: uuidv4(),
        title: "Learn Golang",
        assignedTo: "",
        creator: "linor",
        sprint: "2",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
        assignedTo: "",
        creator: "",
        sprint: "1",
      },
    ],
  },
];

export default mockData;

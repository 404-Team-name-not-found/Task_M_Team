import React from 'react'
import Kanban from '../kanban'
import Filters from '../filter/filters'
import mockData from '../../mockData'
import { useState } from 'react'
import { Droplist } from '@dev-club/ds';

function TaskManager() {
    const [data, setData] = useState(mockData)


    
  return (
    <div>
        <Filters data={data}></Filters>
    </div>
  )
}

export default TaskManager
import { useState } from 'react'
import './App.css'
import Backlog from './components/Backlog'
import Kanban from './components/kanban'
import Navbar from './components/Navbar'

function App() {
    const [content, setContent] = useState(<Kanban/>);
    const [title, setTitle] = useState("Sprint Dash");
    
    return (
        <div className='container'>
        <div className='apps'>
            <h3> {title} </h3>
            {content}
        </div>
        <div className='Navbar'>
            <Navbar content={content}>

            </Navbar>
        </div>
        </div>
    )
}

export default App

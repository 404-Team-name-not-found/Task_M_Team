import './App.css'
import Backlog from './components/Backlog'
import Kanban from './components/kanban'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className='container'>
        <div className='apps'>
            <Kanban />
        </div>
        <div className='Navbar'>
            <Navbar>

            </Navbar>
        </div>
        </div>
    )
}

export default App

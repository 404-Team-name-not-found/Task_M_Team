import './App.css'
import Backlog from './components/Backlog'
import Kanban from './components/kanban'

function App() {
    return (
        <div style={{ padding: '50px' }}>
            <h1 style={{ marginBottom: '20px' }}>
                Kanban UI
            </h1>
            <Kanban />
        </div>
    )
}

export default App

import './App.css'
import TaskManager from './components/TaskManager/TaskManager'
function App() {
    return (
        <div style={{ padding: '50px' }}>
            <h1 style={{ marginBottom: '20px' }}>
                Kanban UI
            </h1>
            <TaskManager />
        </div>
    )
}

export default App

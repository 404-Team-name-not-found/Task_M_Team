import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SpirntPage from './Pages/SpirntPage'
import BacklogPage from './Pages/BacklogPage'
import StatisticsPage from './Pages/StatisticsPage'

function App() {
    return (
        <Router>
        <div className='container'>
        <div className='Navbar'>
            <Navbar/>
        </div>
        <div className='apps'>
            <Routes>
                <Route path="/sprint" element={<SpirntPage/>}/>
                <Route path="/backlog" element={<BacklogPage/>}/>
                <Route path="/statistics" element={<StatisticsPage/>}/>
            </Routes>
            </div>
        </div>
        </Router>
    )
}

export default App

import './App.css'
import {Routes,Route} from "react-router-dom";
import TaskManager from './Pages/TaskManager';
import LandingPage from './Pages/LandingPage';
import SpirntPage from './Pages/SpirntPage'
import BacklogPage from './Pages/BacklogPage'
import StatisticsPage from './Pages/StatisticsPage'
import BoardTest from './components/BoardTest'
import ProtectedRoute from './ProtectedRoutes';
import Navbar from './components/Navbar'


const App = () => {
    return (
        <div className='container'>
        <div className='Navbar'>
            <Navbar/>
        </div>
        <div className='apps'>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="/app" element={<TaskManager/>}/>
                    <Route path="/backlog" element={<BacklogPage/>}/>
                    <Route path="/sprint" element={<SpirntPage/>}/>
                    <Route path="/statistics" element={<StatisticsPage/>}/>
                    <Route path="/dnd" element={<BoardTest/>}/>
                    <Route path='*' component={()=> "404 NOT FOUND"}/>
                </Route> 
            </Routes>
        </div>
    </div>
    )
}

export default App

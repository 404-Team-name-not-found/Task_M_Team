import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kanban from './components/Kanban/Kanban';
// import Navbar from './components/Navbar'
// import SpirntPage from './Pages/SpirntPage'
// import BacklogPage from './Pages/BacklogPage'
// import StatisticsPage from './Pages/StatisticsPage'
// import DragList from './components/DNDList/DragList'
// import BoardTest from './components/BoardTest'

function App() {
    return (
        <Kanban></Kanban>
        // <Router>
        //     <div className='container'>
        //         <div className='Navbar'>
        //             <Navbar />
        //         </div>
        //         <div className='apps'>
        //             <Routes>
        //                 <Route path="/backlog" element={<BacklogPage />} />
        //                 <Route path="/sprint" element={<SpirntPage />} />
        //                 <Route path="/statistics" element={<StatisticsPage />} />
        //                 <Route path="/dnd" element={<Kanban />} />
        //             </Routes>
        //         </div>
        //     </div>
        // </Router>
    )
}

export default App

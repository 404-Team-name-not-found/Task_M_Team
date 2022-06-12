import React from 'react';
import Navbar from '../components/Navbar'
import SpirntPage from '../Pages/SpirntPage'
import BacklogPage from '../Pages/BacklogPage'
import StatisticsPage from '../Pages/StatisticsPage'
import BoardTest from '../components/BoardTest'
import {Routes,Route} from "react-router-dom";


const TaskManager = () => {
    return (
        <div className='container'>
            <div className='Navbar'>
                <Navbar/>
            </div>
            <div className='apps'>
                <Routes>
                    <Route path="/app/backlog" element={<BacklogPage/>}/>
                    <Route path="/app/sprint" element={<SpirntPage/>}/>
                    <Route path="/app/statistics" element={<StatisticsPage/>}/>
                    <Route path="/app/dnd" element={<BoardTest/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default TaskManager;
import './Navbar.css'
import Button from '../NavbarBtns/Index'
import buttons from '../../Data/NavbarBtnsData';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import React from 'react';
import Kanban from '../Kanban';
import Backlog from '../Backlog';
import { v4 as uuidv4 } from 'uuid'


const Navbar = props => {
    const [data, setData] = useState(buttons)

    return (
            <div className='nb'>
            <h3>ColmanDevClub</h3>
            {
                data.map(button => (
                    <Link to={"/"+button.icon}>
                    <Button
                    key={uuidv4()}
                    title={button.title}
                    icon={button.icon}
                    onClick={props.onClick}
                    /> 
                    </Link>
                ))
            }

            </div>
    );
};

export default Navbar;

  
//   export default function App() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/users">Users</Link>
//               </li>
//             </ul>
//           </nav>
  
//           {/* A <Switch> looks through its children <Route>s and
//               renders the first one that matches the current URL. */}
//           <Switch>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/users">
//               <Users />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MbaHome from "./component/MbaHome";

import MbaNavBar from "./component/MbaNavBar";



import MbaCreateUser from "./component/MbaCreateUser";
import MbaEditUser from "./component/MbaEditUser";
import MbaNavbar from "./component/MbaNavBar";


export default function MbaApp() {
  return (
    <Router>
    <div className='container border my-3'>
        <h1>React Router Demo</h1>
        <hr />
            <nav className=' alert alert-blue'>
              <ul>
                <li><Link to="/">trang chu</Link></li>
                <li><Link to="/aduser">them user</Link></li>
                <li><Link to="/edituser">edit user</Link></li>
              </ul>
            </nav>
            
            <Routes>
                  <Route path="/" element={<MbaHome />} />
                  <Route path="/adduser" element={<MbaCreateUser />} />
                  <Route path="/edituser" element={<MbaEditUser/>} />
            </Routes>
            </div>
            <MbaNavBar/>
            <MbaCreateUser/>
            <MbaEditUser/>
            <MbaHome/>
           </Router>
          
); 
}

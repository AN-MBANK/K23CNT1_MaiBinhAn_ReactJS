import { Link, Route, Router, Routes } from 'react-router-dom';
import MbaHome from './component/MbaHome';
import MbaLogin from './component/MbaLogin';
import MbaProduct from './component/MbaProduct';
import './App.css';




function MbaApp() {
  return ( 
  <Router>
    <div className='container border my-3'>
        <h1>React Router Demo</h1>
        <hr />
            <nav className=' alert alert-blue'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/product">Product</Link></li>
              </ul>
            </nav>
            
            <Routes>
                  <Route path="/" element={<MbaHome />} />
                  <Route path="/login" element={<MbaLogin />} />
                  <Route path="/product" element={<MbaProduct />} />
            </Routes>
            </div>
           </Router>
          

         
  );
}

export default MbaApp;

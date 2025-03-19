import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MbaListUsers from './components/MbaListUsers'
import MbaNavBar from './components/MbaNavBar'
import MbaHome from './components/MbaHome'
import MbaCreateUser from './components/MbaCreateUser'
import MbaEditUser from './components/MbaEditUser'

export default function MbaApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1 className='text-center alert alert-danger'>MBA-API-Project</h1>
      <Router>
          <MbaNavBar />
          <hr/>
          <Routes>
            <Route path='/' element={<MbaHome />} />
            <Route path='/list-user' element={<MbaListUsers />} />
            <Route path='/create-user' element={<MbaCreateUser />} />
            <Route path='/edit-user/:id' element={<MbaEditUser />} />
          </Routes>
      </Router>
      
    </div>
  )
}

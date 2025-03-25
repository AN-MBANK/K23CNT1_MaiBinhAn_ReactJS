import React from 'react'
import {BrowBrowserRouter as Router, Routes, MbaApp} from 'react-router-dom'
export default function App() {
  return (
    <div>
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

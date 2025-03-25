import React from 'react'
import { BrowserRouter as MbaRouter, Route, Routes } from 'react-router-dom'
import MbaNavBar from './component/MbaNavBar'
import MbaListUser from './component/MbaListUser'
import MbaCreateUser from './component/MbaCreateUser'
import MbaEditUser from './component/MbaEditUser'
import MbaHome from './component/MbaHome'
export default function MbaApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>k23cnt1 - mai binh an - 2310900001</h1>
      <hr/>
      <MbaRouter>
        
        <MbaNavBar/>
        <hr/>
        <Routes>
          <Route path='/' element={<MbaHome/>}/>
          <Route path='/mba-list-user' element={<MbaListUser/>}/>
          <Route path='/mba-create-user' element={<MbaCreateUser/>}/>
          <Route path='/mba-edit-user/:id' element={<MbaEditUser/>}/>
        </Routes>
         
      </MbaRouter>
      
    </div>
  )
}

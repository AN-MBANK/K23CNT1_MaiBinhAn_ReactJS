import React from 'react'
import Mbahome from './Mbahome'

export default function () {
  return (
    <nav>
        <link to='/' element={<Mbahome />}/>
        <link to='/list user' element={<ListUser />}/>
        <link to='/create user' element={<CreateUser />}/>



    </nav>
  )
}

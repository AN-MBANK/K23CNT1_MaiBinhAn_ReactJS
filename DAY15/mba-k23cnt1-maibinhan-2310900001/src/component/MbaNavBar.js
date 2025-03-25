import React from 'react'
import {Link} from 'react-router-dom'


export default function MbaNavBar() {
  return (
    <nav>
        <Link to='/' >Home </Link> <plant>|</plant>
        <Link to='/mba-list-user'>list user</Link><plant>|</plant>
        <Link to='/mba-create-user'> create user</Link>
    </nav>
  )
}

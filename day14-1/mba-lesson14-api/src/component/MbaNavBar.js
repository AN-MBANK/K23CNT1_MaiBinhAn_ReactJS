import React from 'react'
import {Link} from 'react-router-dom'
export default function MbaNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>MbaHome</Link> | 
            <Link to={"/adduser"}>them moi user</Link> |
            <Link to={"/edituser"}>edituser</Link>  | 
            
        </ul>
    </div>
  )
}
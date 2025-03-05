import React from 'react'
import MbaLoginComp from './MbaLoginComp'
import MbaLogoutComp from './MbaLogoutComp'

export default function MbaLoginControl(props) {
    const mbaElement = props.isLoggedIn ? <MbaLoginComp /> : <MbaLogoutComp />

    // const mbaLogin = ()=>{
    //     if(props.isLoggedIn)
    //         return <MbaLogoutComp />
    //     else 
    //         return <MbaLoginComp />
    // }

  return (
    <div>
      {mbaElement}
    </div>
  )
}
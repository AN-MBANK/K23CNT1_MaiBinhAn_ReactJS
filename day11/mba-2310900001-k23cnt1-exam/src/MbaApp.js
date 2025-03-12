import React, { Component } from "react";
import MbaAccountAdd from "./component/MbaAccountAdd";
import MbaAccountList from "./component/MbaAccountList";

function MbaApp(){
  
    const { accounts, addAccount } = accounts();
      return (
    <div className='container border mt-3'>
        <h1> mba-2310900001-K23CNT1-exam </h1>
        
        <MbaAccountAdd />
        
        <MbaAccountList />
    </div>

  );}
  export default MbaApp;

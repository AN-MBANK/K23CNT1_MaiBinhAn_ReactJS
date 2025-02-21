import React from 'react';
import './App.css';
import MbaFuncComp from './components/MbaFuncComp';
import MbaFuncComp1 from './components/MbaFuncComp1';
import MbaClassComp from './MbaClassComp';

function MbaApp() {
  //obj
  const users = {
    fullname:'mai linh quy',
    age: 20,
    phone:"00710471824"}
  return (
    <div className="cointainer border mt-3">
      <h1>demo compermont</h1> 
      <hr/>
      <div className='alert alert-danger'>
        <MbaFuncComp Name="mba" address="99 absj" company="glx"/>
        <hr/>
        <MbaFuncComp Name="mba" address="00abb" company="asd"/>

      </div>
      <div className='alert alert-info'>
        <MbaFuncComp1 renderinfo={users}/>
      </div>
      <div className='alert alert-info'>
        <MbaClassComp />
        {/*chuyen du lieu tu MbaApp -> xuong MbaClassComp*/}
        <MbaClassComp rendername="K23CNT1" renderUsers={users}/>
      </div>
    </div>
  );
}

export default MbaApp;

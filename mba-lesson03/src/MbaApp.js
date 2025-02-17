import React from 'react';
import './App.css';
import MbajsExpression from './compoment/MbajsExpression';
import MbaFuncComp from './compoment/MbaFuncComp';
import MbaClassComp from './compoment/MbaclassComp';

function MbaApp() {
  return (
    <div className='container border mt-3 bg-white'>
        <h1>React js lesson 03- MBA</h1>

        <MbajsExpression />
        <hr/>
        {/* sd func Comp*/}
        <MbaFuncComp/>
        <hr/>
        {/*sd classcomp*/}
        <MbaClassComp/>
    </div>
  );
}

export default MbaApp;

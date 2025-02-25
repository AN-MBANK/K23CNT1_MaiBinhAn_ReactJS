import React, { Component } from 'react';
import MbaFuncEvent1 from './components/MbaFuncEvent1';
import MbaClassCompEvent1 from './components/MbaClassCompEvent1';
import MbaFuncCompEventProps from './components/MbaFuncCompEventProps';

class MbaApp extends Component {
   render() {
    return ( 
      <div className='container border mt-3'> 
        <h1 className='text-center alert alert-info my-2'> MBA App</h1>
        <hr/>
        <div>
          <h2>funCompEv</h2>
          <MbaFuncEvent1/>
        </div>
        <div>
          <h2>ClassCompEv</h2>
          <MbaClassCompEvent1/>
        </div>
        <div>
          <h2>FuncCompEv; props</h2>
          <MbaFuncCompEventProps mbaRenderName="mba"/>
        </div>
      </div>
    );
      
    }
    
   }
export default MbaApp;

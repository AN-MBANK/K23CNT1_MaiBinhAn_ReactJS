import React from 'react';

import MbaUst from './component/MbaUseState';
import MbaUseStateListObject from './component/MbaUseStateListObject';
import MbaUseEffect from './component/MbaUseEffect';

export default function MbaApp() {
  
    return (
      <div className='container border mt-3'>
          <h1>MBA - Lesson09 - hook</h1>
          <hr/>
          <MbaUst/>
          <hr/>
          <MbaUseStateListObject />
          <hr/>
          <MbaUseEffect />
      </div>
    )
  
 }

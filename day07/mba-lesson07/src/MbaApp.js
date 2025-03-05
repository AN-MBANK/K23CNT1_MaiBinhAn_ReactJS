import React, { Component } from 'react';
import MbaRenderCondition from './component/MbaRenderCondition';
import MbaRenderList from './component/MbaRenderList';
import MbaRenderListStudent from './component/MbaRenderListStudent';

class MbaApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
          <h1>MBA - Lesson07 - Render condition - Render List Key</h1>
          <MbaRenderCondition />

          <MbaRenderList />

          <MbaRenderListStudent />
      </div>
    );
  }
}

export default MbaApp;

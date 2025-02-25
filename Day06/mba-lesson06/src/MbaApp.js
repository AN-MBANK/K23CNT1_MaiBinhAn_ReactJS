import React, { Component } from 'react';
import MbaEventForm1 from './component/MbaEventForm1';
import MbaEventForm2 from './component/MbaEventForm2';
import MbaEventForm3 from './component/MbaEventForm3';
import MbaEventForm4 from './component/MbaEventForm4';
import MbaEventForm5 from './component/MbaEventForm5';

class MbaApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  mbaHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Mba-Event Form - Demo</h1>
          <hr/>
          <MbaEventForm1 />
          <MbaEventForm2 />
          <MbaEventForm3 />
          <MbaEventForm4 />
          <MbaEventForm5 onMbaHandleSubmit={this.MbaHandleSubmitForm}/>
      </div>
    );
  }
}

export default MbaApp;

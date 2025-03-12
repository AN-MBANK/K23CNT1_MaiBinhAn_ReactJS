import React, {component} from 'react';
import MbaAccountList from "./component/MbaAccountList";
import MbaAccountAdd from "./component/MbaAccountAdd";


class MbaApp extends component (){
 render(){

  return (
    <div>
      <h1>mba-2310900001-k23cnt1-exam</h1>
      <MbaAccountAdd />
      <MbaAccountList />
    </div>
  );
}}

export default MbaApp;

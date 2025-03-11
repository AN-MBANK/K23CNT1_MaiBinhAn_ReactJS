import React from 'react';


import MbaTodoList from './component/MbaTodoList';


import MbaAddTodo from './component/MbaAddTodo';
import { ThemeProvider } from './context/MbaThemeContext';

export default function MbaApp() {
  return (
    
        <div className=' container border mt-3 text-center'>


      <h1>Mini Project: Quản Lý Công Việc (To-Do List) với Hooks trong ReactJS</h1>
      <hr/>
      <p> Dự án này giúp bạn thực hành sử dụng 
        <b style={{ color: 'violet' }}> 
          useState, useEffect, useContext, useReducer và useRef
        </b> 
          trong ReactJS để quản lý các công việc (To-Do List) 
      </p>
      <ThemeProvider>
      <div style={{textAlign: "center", padding: "10px"}}>
        <h1>
          <b>Quản Lý Công Việc (To-Do List)</b>
        </h1>
        <MbaAddTodo/>
        <h2>
          <b> Danh Sách Công Việc</b>
        </h2>
        <MbaTodoList/>
     </div>
     </ThemeProvider>
    </div>
    
    
  );
}

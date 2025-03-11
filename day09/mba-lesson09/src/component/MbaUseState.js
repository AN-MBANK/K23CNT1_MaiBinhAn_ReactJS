import React, { useState } from 'react';

export default function MbaUst() {
  const [count, setCount] = useState(0); // Create state for count
  const mbaHandleTang = () => {
    setCount(count + 1);
  }; // Function to increase count

  const danh_sach = [100, 200, 300, 500]; // Initial list
  const [list, setList] = useState(danh_sach); // Initialize state for list

  const mbaHandleAddNewRandom = () => {
    setList(prev => {
      return [...prev, parseInt(Math.random() * 1000)];
    })
    setList([
      ...list,
      parseInt(Math.random() * 1000)
    ])
  }; // Function to add a random number to the list

  return (
    <div className='alert alert-info'> 
      <h2> Su dung useState</h2>
      <div>
        <b>Count: {count}</b>
        <button onClick={mbaHandleTang}> up </button>
        <button onClick={() => setCount(count - 1)}> down</button>
        <button onClick={() => setCount(0)}> change to reset </button>
      </div>
      <div>
        <h3>List: {list.toString()}</h3>
        <button onClick={mbaHandleAddNewRandom}>add new(random)</button>
      </div>
    </div>
)}

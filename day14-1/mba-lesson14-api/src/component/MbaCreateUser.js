import React, { useState } from 'react'
import axios from 'axios'
export default function MbaCreateUser() {
    // khởi tạo state
    const [mbaFullName,setMbaFullName] = useState('')
    const [mbaAge,setMbaAge] = useState(0)
    const [mbaActive,setMbaActive] = useState(true)

    // api post
    const mbaCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/mba_users";

    // khi submit form
    const mbaHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("mbaActive:",mbaActive);
        let mbaNewUser = {mbaFullName,mbaAge,mbaActive};
        console.log(mbaNewUser);

        // ghi dữ liệu vào api
        axios
            .post(mbaCreateUserApi, mbaNewUser)
            .then((mba_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="mbaFullName">Full Name</label>
                <input type='text' name='mbaFullName' id="mbaFullName" 
                    value={mbaFullName}
                    onChange={(ev)=>setMbaFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="mbaAge">Age</label>
                <input type='number' name='mbaAge' id="mbaAge" 
                    value={mbaAge}
                    onChange={(ev)=>setMbaAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="mbaActive">Active</label>
                <input type='radio' name='mbaActive' id="mbaActive_hd" value={'true'} 
                    onChange={(ev)=>setMbaActive(ev.target.value)} />
                    <label for="mbaActive_hd"> Hoạt động</label>
                <input type='radio' name='mbaActive' id="mbaActive_kh" value={'false'} 
                    onChange={(ev)=>setMbaActive(ev.target.value)}/>
                    <label for="mbaActive_kh"> Khóa</label>
            </div>
            <button onClick={mbaHandleSubmit}>Create</button>
        </form>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function MbaReadMockAPI() {
    // khởi tạo state 
    const [mbaListUser, setMbaListUser] = useState([])
    // api
    const mbaApiOnline = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/mba_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(mbaApiOnline)
            .then((mba_response)=>{
                setMbaListUser(mba_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const mbaElementUser = mbaListUser.map((mba_item, index)=>{
        return(
            <tr key={index}>
                <td>{mba_item.mbaId}</td>
                <td>{mba_item.mbaFullName}</td>
                <td>{mba_item.mbaAge}</td>
                <td>{mba_item.mbaActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   mbaElementUser
                }
            </tbody>
        </table>
    </div>
  )
}

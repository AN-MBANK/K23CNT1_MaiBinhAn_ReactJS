import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function MbaListUsers() {
    // khởi tạo state
    const [mbaListUser, setMbaListUser] = useState([])
    // đọc dữ liệu từ api local và set cho mbaListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((mbaResponse)=>{
                setMbaListUser(mbaResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    mbaListUser.map((mbaItem, index)=>{
                        return (
                            <tr key={index}>
                                <td>{mbaItem.fullName}</td>
                                <td>{mbaItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

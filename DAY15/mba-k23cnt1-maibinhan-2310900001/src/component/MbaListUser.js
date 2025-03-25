import React,{ useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function MbaListUser() {
    //state
    const [mbaListUser, setMbaListUser] = useState([])
    const mbaApi = "https://67e17aa358cc6bf78525ff2f.mockapi.io/mba-k23cnt1-2310900001/mba_users"

    
    useEffect(() => {
            axios.get(mbaApi)
                .then(mba_response => {
                    // Xử lý dữ liệu trả về từ API
                    console.log(mba_response.data); // Dữ liệu từ API
                    setMbaListUser(mba_response.data);
                })
                .catch(error => {
                    // Xử lý lỗi
                    console.error('Có lỗi xảy ra:', error);
                });
        }, [])

        const mbaHandleDelete = async (mbaId) => {
            if (window.confirm('Bạn có muốn xóa không?')) {
                await axios.delete(mbaApi + "/" + mbaId);
        
                let mbaListUserDelete = mbaListUser.filter(x => x.id !== mbaId);
                setMbaListUser(mbaListUserDelete);
            }
        }
        
        const navigate = useNavigate();
        
        const mbaHandleUpdate = (mbaId) => {
            navigate(`/mba-edit-user/${mbaId}`);
        }
        
      
  return (
    <div>
        <h1>danh sach sv</h1>
        <table className='table table-bordered alert alert-dark'>
    <thead >
        <tr>
            <th>User Id</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {/* // hiển thị danh sách user */}
        {
            mbaListUser.map((mbaUserItem, index) => {
                return (
                    <tr key={index}>
                        <td>{mbaUserItem.id}</td>
                        <td>{mbaUserItem.mba_name}</td>
                        <td>{mbaUserItem.mba_email}</td>
                        <td>{mbaUserItem.mba_phone}</td>
                        <td>
                            {mbaUserItem.mba_active ?
                                <span className='badge text-bg-success'>Hoạt động</span>
                                : <span className='badge text-bg-danger'>Tạm khóa</span>}
                        </td>
                        <td >
                            <button onClick={() => mbaHandleUpdate(mbaUserItem.id)}>Edit</button>
                            <plant> | </plant>
                            <button onClick={(ev) => mbaHandleDelete(mbaUserItem.id)}>Delete</button>
                        </td>
                    </tr>
                );
            })
        }
    </tbody>
</table>


    </div>
  )
}

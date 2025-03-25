import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function MbaCreateUser() {
    const mbaUser = {
        id: 0,
        'mba_name': '',
        'mba_email': '',
        'mba_phone': '',
        'mba_active': true
    }
    
    const [mba_user, setMba_User] = useState(mbaUser);
    const mbaApi = "https://67e17aa358cc6bf78525ff2f.mockapi.io/mba-k23cnt1-2310900001/mba_users";
    const navigate = useNavigate();
    
    const mbaHandleSubmit = (ev) => {
        ev.preventDefault();
        console.log(mba_user);
        axios
            .post(mbaApi, mba_user)
            .then(() => {
                navigate('/mba-list-user');
            })
            .catch((error) => console.log('Lỗi khi thêm user.'));
    }
    
  return (
    <div>
        <h1>them moi sv</h1>
        <form>
    <div className="mb-3 row">
        <label htmlFor="mba_name" className="col-sm-2 col-form-label">FullName</label>
        <div className="col-sm-10">
            <input 
                type="text" 
                className="form-control" 
                id="mba_name"
                name="mba_name"
                value={mba_user.mba_name} 
                onChange={(ev) => setMba_User({...mba_user, mba_name: ev.target.value})} 
            />
        </div>
    </div>

    <div className="mb-3 row">
        <label htmlFor="mba_email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
            <input 
                type="text" 
                className="form-control" 
                id="mba_email" 
                name="mba_email"
                value={mba_user.mba_email} 
                onChange={(ev) => setMba_User({...mba_user, mba_email: ev.target.value})} 
            />
        </div>
    </div>

    <div className="mb-3 row">
        <label htmlFor="mba_phone" className="col-sm-2 col-form-label">Phone</label>
        <div className="col-sm-10">
            <input 
                type="text" 
                className="form-control" 
                id="mba_phone" 
                name="mba_phone"
                value={mba_user.mba_phone} 
                onChange={(ev) => setMba_User({...mba_user, mba_phone: ev.target.value})} 
            />
        </div>
    </div>

    <div className="mb-3 row">
        <label htmlFor="mba_active" className="col-sm-2 col-form-label">Active</label>
        <div className="col-sm-10">
            <input 
                type="radio" 
                id="mba_active_true"  
                className="mx-3"   
                onChange={(ev) => setMba_User({...mba_user, mba_active: ev.target.value})}
                value={true}
                name="mba_active"  
            /> 
            <label htmlFor="mba_active_true">Hoạt động</label>

            <input 
                type="radio" 
                id="mba_active_false"  
                className="mx-3"
                onChange={(ev) => setMba_User({...mba_user, mba_active: ev.target.value})}
                value={false} 
                name="mba_active" 
            /> 
            <label htmlFor="mba_active_false">Tạm khóa</label>
        </div>
    </div>

    <div className="mb-3 row">
        <label htmlFor="" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-10">
            <button 
                className="btn btn-primary mx-2 px-3" 
                name="btnMbaCreate" 
                onClick={mbaHandleSubmit}
            >
                Create
            </button>
            <button 
                className="btn btn-secondary mx-2 px-3" 
                name="btnMbaBack"
            >
                Back
            </button>
        </div>
    </div>
</form>

    </div>
  )
}

import React, { useState } from 'react';

export default function MbaUseStateListObject() {
    const listStudent = [
        {mbaId:"SV001",mbaName:"mb an", mbaAge:45, mbaClass:"K23CNT1"},
        {mbaId:"SV002",mbaName:"Nguyễn Quang A", mbaAge:22, mbaClass:"K23CNT1"},
        {mbaId:"SV003",mbaName:"Nguyễn Quang B", mbaAge:21, mbaClass:"K23CNT1"},
        {mbaId:"SV004",mbaName:"Nguyễn Quang C", mbaAge:23, mbaClass:"K23CNT1"},
    ];

    // tao state vs hook
    const [ mbaStudents, SetMbaStudents]= useState(listStudent);
  // render data  
    let mbaElement = mbaStudents.map((mbaItem, index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{mbaItem.mbaId}</td>
                <td>{mbaItem.mbaName}</td>
                <td>{mbaItem.mbaAge}</td>
                <td>{mbaItem.mbaClass}</td>
                <td>
                    <button className='btn btn-primary mx-1'>Sửa</button>
                    <button className='btn btn-danger mx-1'>Xóa</button>
                </td>
            </tr>
        )
    })
return(
   <div>
        <div className='card-header'>
            <h2>Danh sách sinh viên</h2>
        </div>
            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>mbaID</th>
                        <th>mbaName</th>
                        <th>mbaAge</th>
                        <th>mbaClass</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {mbaElement}
                </tbody>
            </table>
        </div>
    </div>
);
}
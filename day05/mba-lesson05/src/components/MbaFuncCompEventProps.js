import React from 'react';

export default function MbaFuncCompEventProps(){
    // ham xu ly su kien 
    const mbahandlebuttonclick1 = () => {
        alert ("du lieu tu props:" + MbaFuncCompEventProps.mbaRenderName);
    console.log("hey:", MbaFuncCompEventProps.mbaRenderName);}
    const mbahandlebuttonclick2 =(param)=>{
        //lay du lieu tu props
        alert ("du lieu tu props:" + MbaFuncCompEventProps.mbaRenderName);
        //lay du lieu tu tham so
        console.log('=========================');
        console.log("hi:", param);
        console.log('=========================');
    }
    return (
        <div className="alert alert-danger">
            <button className='btn btn-primary mx-1 '
            onClick={mbahandlebuttonclick1}>bt01</button>
            <button className='btn btn-success mx-1'
            onClick={()=>mbahandlebuttonclick2("adja")}>bt02</button>
        </div>
    )
}
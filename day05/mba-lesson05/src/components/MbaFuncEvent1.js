import React from 'react';

export default function MbaFuncEvent1(){
    //ham xu ly su kien 
    const MbaFuncEvent1click= ()=>{
        alert(  "button1 - clicked");};
    const MbaFuncEvent2click= ()=>{
        alert(  "button2 - clicked");
    } ;
    const MbaFuncEvent3click= (name)=>{
        alert( "name:" + name);}
    return (
        <div className="alert alert-info">
            <button className="btn btn-primary" onClick={ MbaFuncEvent1click()}>
                button1 
            </button>
            <button className="btn btn-success" onClick={ MbaFuncEvent2click}>
                button2
            </button>
            <button className="btn btn-success" onClick={ MbaFuncEvent3click}>
                button3
            </button>
            <button className="btn btn-success" onClick={ ()=>MbaFuncEvent3click}>
                button4
            </button>
            <button className="btn btn-success" onClick={ (param)=> MbaFuncEvent3click}>
                button5
            </button>
        </div>
    );
}
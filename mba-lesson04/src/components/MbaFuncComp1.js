import React from "react";

export default function MbaFuncComp1(props) {
    return (
        <div>
            <h2>props is obj</h2>
            <p>INFOR:</p>
            <p>fullName: {props.renderinfo.fullname}</p>
            <p>age: {props.renderinfo.age}</p>
            <p>phone: {props.renderinfo.phone}</p>
        </div>
    )
}
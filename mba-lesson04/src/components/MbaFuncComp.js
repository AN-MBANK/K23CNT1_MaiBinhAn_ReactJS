import React from "react";

export default function MbaFuncComp(props) {
    return (
        <div>
            <h2>demo</h2>
            <p>lay du lieu</p>
            <p>Name: {props.name}</p>
            <p>address: {props.address}</p>
            <p>company: {props.company}</p>
            <p>not: {props.not}</p>
        </div>
    )
}
import React, { useEffect, useState } from "react";

export default function MbaUseEffect (){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect (calback)");
    })

    useEffect(()=>{
        console.log("useEffect (calback,[]); chi 1 lan va duy nhat")
    },[])

    useEffect(()=>{
        console.log('count has changes:', count);
    },)
    return(
        <div className='alert alert- danger'>
            <h2> useEffect</h2>
            <button onClick={()=> setCount(count+1)}>Click me</button>
        </div>
    )
}
import React from 'react';
export default function MbajsExpression(){
    // bien
    const name = "MBA";

    const user ={ 
        firstname:"M",
        Lastname:"BA"
    }
    //  ham
    const fullname=(user)=>{
        return user.firstname + ' ' + user.Lastname;
    }
    //element
    const element=(
        <div>
            {/*bieu thuc jsx */}
            <h2>{fullname(user)}</h2>
            <hr/>
            <h3> welcome to, {name}</h3>  
        </div>
    );

    //ham
    const saywellcome =(name)=>{
        if(name){
            return <h3>wellcome to</h3>
        }else{
            return <h3>wellcome to k23cnt1</h3>
        }
    }

    return(
        <div>
            <h1> MBA - JSX Expression</h1>
            {/*su dung bien element*/}
            {element}

            <hr/>
            {saywellcome()}
            <hr/>
            {saywellcome("Ha To The")}
        </div>
    )
}

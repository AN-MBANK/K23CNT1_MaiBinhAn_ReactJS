import { useState } from "react";

function MbaAddTodo({ dispatch}){
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()){
            dispatch({type: 'ADD_TODO', payload: {title}});
            setTitle("");
        }};


    return(
        
           
        
            <form onSubmit={handleSubmit}>
            <input type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a todo"/>

            <button type="Submit">  +   </button>
        </form>
    
    );
}
export default MbaAddTodo;
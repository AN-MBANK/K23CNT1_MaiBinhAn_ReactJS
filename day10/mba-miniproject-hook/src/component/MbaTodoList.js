import { useEffect, useReducer } from "react";

import { todoReducer } from "../reducers/MbaTodoReducer";
import MbaAddTodo from "./MbaAddTodo";

function MbaTodoList() {
    const [todos, dispatch]= useReducer(todoReducer, [], () =>{
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });


    useEffect(() =>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h1>Todo List</h1>
            <MbaAddTodo dispatch={dispatch} />
            <ul>
                {todos.map(todo => (
                    <MbaTodoList  key={todo.id} todo={todo} dispatch={dispatch}/>))}
            </ul>
        </div>
    );
}

export default MbaTodoList;

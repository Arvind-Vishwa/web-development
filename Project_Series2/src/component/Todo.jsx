import { useState } from "react";

function Todo(){
    const[todo,setTodo]=useState([]);
    const[input,setInput]=useState("");
    
    
    const handleOnChange=(e) =>{
        setInput(e.target.value);
    }

    const handleOnClick=() =>{
        
        setTodo((todo) =>{
                return todo.concat({
                text:input,
                id:Math.floor(Math.random() *10),
            });
        })
        setInput("");
    }

        const removeTodo=(id) =>{
            setTodo((prevtodo) => prevtodo.filter((t) => t.id !== id));
        }
    
    return (
        <div className="container">
            <input type="text" value={input} onChange={handleOnChange} />
            <button onClick={handleOnClick}>Add</button>

            <ul>
            {todo.map(({text,id} ) => (
                <li key={id}>{text}  <button  onClick={() =>removeTodo(id)}>Remove</button></li>
            ))}
            </ul>
        </div>
    )
}

export default Todo;
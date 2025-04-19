import { useState } from "react";
import './Button.css'
const Button= () =>{
    const[count,setCount]=useState(0);
    
    const handleOnclick= ()=>{
        
        setCount(prevcount => prevcount+1);
        if(count == 1){
            alert('+ve side');
        }
        
        
    }
    const handleOnclick2=()=>{
        setCount(count-1);
        if(count < 0){
            alert('on -ve side');
        }
    }
    const handleOnclick3=()=>{
        setCount(0);
    }

    return (
        <div>
            <div className="div1">
            <h1>Counter : {count}</h1>
            <button className='but'  onClick={handleOnclick}>+1</button>
            <button className='but'  onClick={handleOnclick2}>-1</button>
            <button className='but'  onClick={handleOnclick3}>Reset</button>
        </div>
        </div>
    )
}
export default Button;
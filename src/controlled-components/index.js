import React,{useState} from "react";
import "./style.css"; 

const Form1 =()=>{
    const [inputValue,setInputValue] =useState('');

    const handleChange=(event)=>{
        setInputValue(event.target.value);
    };

    return (
        <div>
            <form className="form1">
                <h1>form1</h1>
                <input placeholder="first form" type="text" value={inputValue} onChange={handleChange}
                />                
            </form>

        </div>
        

    )


};

export default Form1;
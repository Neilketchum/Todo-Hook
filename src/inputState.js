import { useState } from "react";
export default intitalVal =>{
    const [value,setValue] = useState(intitalVal)
    const handleChange = e=>{
        setValue(e.target.value)
    };
    const reset = () =>{
        setValue("");
    }
    return [value,handleChange,reset];
};
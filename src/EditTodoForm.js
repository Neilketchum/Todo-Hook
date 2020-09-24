import React from 'react'
import { TextField } from '@material-ui/core'
import inputState from  './inputState'
function EditTodoForm({editTodo,id,task,toggle}) {
    const [value,handleChange,reset]  = inputState(task)
    return (
        <form onSubmit = {(e)=>{
            e.preventDefault();
            editTodo(id,value);
            reset();
            toggle();
        }}>
            <TextField margin = 'normal'  onChange = {handleChange}  value = {value} fullWidth ></TextField>  
        </form>
     
        
    )
}

export default EditTodoForm

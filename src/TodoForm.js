import { TextField } from '@material-ui/core'
import React from 'react'
import Paper from '@material-ui/core/Paper';
import inputState from './inputState'

function TodoForm({addTodo}) {
    const [value,handleChange,reset] = inputState("");
    function onSubmit(e){
        e.preventDefault();
        addTodo(value)
        console.log(e.value)
        reset();
    }
    return (
        <div>
           
            <Paper style = {{margin:"1rem 0",padding:"0 1rem"}}>
                <form onSubmit = {onSubmit}>
                    <TextField value = {value} onChange = {handleChange} margin = 'normal' label = "Add New Todo" fullWidth></TextField>
                    
                </form> 
               
            </Paper>
        </div>
    )
}

export default TodoForm
    
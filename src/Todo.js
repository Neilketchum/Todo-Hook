import React from 'react'
import useToggleState from './toggleStateHook'
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditTodoForm from './EditTodoForm';
function Todo({task,completed,id,removeTodo,toggleTodo,editTodo}) {
    const [isEditing,toggle]  = useToggleState(false) 
    return (
        <div>
            <ListItem>
                {isEditing ? <EditTodoForm editTodo = {editTodo} id = {id} task = {task} toggle = {toggle}> </EditTodoForm>:
                <>
                <ListItemText style = {{textDecoration:completed?'line-through':'none'}}> 
                    <Checkbox tabIndex = {-1} checked = {completed} onClick  = {()=>toggleTodo(id)}></Checkbox>
                    {task}  
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton >
                        <EditIcon aria-label = "Edit" onClick = {toggle} ></EditIcon>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon aria-label = "Delete" onClick = {()=>removeTodo(id)}></DeleteIcon>
                    </IconButton>                  
                </ListItemSecondaryAction>
                </>
            }
            </ListItem> 
        </div>
    )
}

export default Todo

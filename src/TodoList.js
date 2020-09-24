import { Divider, List, ListItem, ListItemText, Paper } from '@material-ui/core'
import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,removeTodo,toggleTodo,editTodo}) {
    if(todos.length){
    return (
    
            <Paper>
                <List>
                    { todos.map(todo=>(
                    <>
                        <ListItem>
                            <ListItemText> 
                                <Todo editTodo = {editTodo} task = {todo.body} id = {todo.id} completed = {todo.completed} removeTodo = {removeTodo} toggleTodo  = {toggleTodo}></Todo>
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                    </>
                     ))}
                </List>  
                
            </Paper>
      
    )}
    else{
        return null;
    }
}

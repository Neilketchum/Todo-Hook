import React,{useState,useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
const { uuid } = require('uuidv4');
export default function TodoApp() {
    // const initalTodos = JSON.pare(window.localStorage.getItem('Todos'))
    // const initalTodos = [{id:1,body:"Ask Out Palak",completed:false},
    // {id:2,body:"Get a better FAANG job",completed:false},
    // {id:3,body:"Get a 99.5% in CAT",completed:false},
    // {id:4,body:"Get Placed",completed:true}]
    const initalTodos = JSON.parse(window.localStorage.getItem("Todos")||[])
    const [todos,setTodos] = useState(initalTodos);
    useEffect(()=>{
        window.localStorage.setItem("Todos",JSON.stringify(todos))
    },[todos])
    const addTodo = newTodo =>{
        setTodos([...todos,{id:uuid(),body:newTodo,completed:false}])
       
    }
    const removeTodo = (id) =>{
        const updatedTodo = todos.filter(todo=>todo.id !== id);
        setTodos(updatedTodo) 
    }
    const toggleTodo = (id)=>{
        const updatedTodo = todos.map(todo => (todo.id === id)?{...todo,completed:!todo.completed}:todo)
        setTodos(updatedTodo)
    }
    const editTodo = (id,newBody) =>{
        const updatedTodo = todos.map(todo=>todo.id === id?{...todo,body:newBody}:todo)
        setTodos(updatedTodo)
    }
    return (
        <div>
             <Paper style = {{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa"}} elevation = {0}>
                <AppBar color = 'primary' position = 'static' style = {{height:"64px"}}>
                    <Toolbar>
                        <Typography color = 'inherit'>
                            Todo With Hooks
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify = 'center' style = {{marginTop:"1rem"}}>
                    <Grid item xs = {11} md = {8} lg = {4}>
                        <TodoForm addTodo = {addTodo}></TodoForm>
                        <TodoList todos = {todos} removeTodo = {removeTodo} toggleTodo = {toggleTodo} editTodo = {editTodo}></TodoList>
                    </Grid>
                </Grid>                
            </Paper>
        
        </div>
    )
}

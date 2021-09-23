import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);
  //run when app start
  useEffect(()=>{
    getLocalTodos();
  },[]);
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
  const filterHandler=()=>{
    switch(status)
    {
      case "completed":
        setFilteredTodos(todos.filter((todo)=>todo.completed==true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=>todo.completed==false));
        break;
      default:
        setFilteredTodos(todos);
        break;

        
    }
  }
  const saveLocalTodos=()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let localTodo =JSON.parse(localStorage.getItem("todos",JSON.stringify("todos")));
      setTodos(localTodo);
    }
  }
  return (
    <div className="App">
    
     <header>
    <h1 className="h111">My To-do List</h1>
    </header>
    <Form  status={status}
           setStatus={setStatus}
           setInputText={setInputText}
           todos={todos}
           setTodos={setTodos}
           inputText={inputText}/>
    <Todolist todos={todos} inputText={inputText} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

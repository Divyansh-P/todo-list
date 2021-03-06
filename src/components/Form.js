import React from 'react';
const Form = (props) => {
  const inputTextHandler=(e)=>{
    console.log(e.target.value);
    props.setInputText(e.target.value);
  }
  const submitTodolist=(e)=>{
   e.preventDefault();
   props.setTodos(
     [...props.todos,
    {text:props.inputText,completed:false,id:Math.random()*1000}]
   );
   props.setInputText("");
  }
  const statuschangehandler=(e)=>{
   props.setStatus(e.target.value);
  }
    return ( 
        <form>
        <div>
      <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitTodolist}>
        <i className="fas fa-plus-square"></i>
      </button>
      </div>
      <div className="select">
        <select onChange={statuschangehandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
     );
}
 
export default Form;



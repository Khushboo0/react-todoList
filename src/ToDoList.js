import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addToDo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };
  const toggleTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };

  const deleteTodo = (index) => {
    const newTodo = todos.filter((_, i) => i !== index);
    setNewTodo(newTodo);
  };

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}} placeholder="Add a new to do"/>
      <button onClick={addToDo}>Add</button>

      <ul>
        {todos.map((todo,index)=>(
            <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
                <button onClick={()=> toggleTodo(index)}>Toggle</button>
                <button onClick={()=> deleteTodo(index)}>Delete</button>

            </li>
        ))}
        </ul>    
    </>
  );
}


export default ToDoList;
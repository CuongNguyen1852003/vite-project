import "./components/todo/todo.css";
import ToDoNew from "./components/todo/ToDoNew";
import ToDoData from "./components/todo/ToDoData";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
    const [todoList, setTodoList] = useState([
      {id: 1, name: "Learning React"},
      {id: 2, name: "Watching Youtube"}
    ])

    const addNewTodo = (name) => {
      const newTodo = {
        id: 3,
        name: name
      }
      setTodoList([...todoList, newTodo])
    }
    return(
    <div className="todo-container">
      <div className="todo-title">Todo List </div>
      <ToDoNew 
        addNewTodo = {addNewTodo}
      />
      <ToDoData 
        todoList = {todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} alt="React Logo" className="logo" />
      </div>
    </div>
    );
};

export default App;

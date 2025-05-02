import "./components/todo/todo.css";
import ToDoNew from "./components/todo/ToDoNew";
import ToDoData from "./components/todo/ToDoData";
import reactLogo from "./assets/react.svg";

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List </div>
      <ToDoNew />
      <ToDoData />
      <div className="todo-image">
        <img src={reactLogo} alt="React Logo" className="logo" />
      </div>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import NewToDoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  // useState For ToDos and Verifying LocalStorage:
  const [todos, setTodos] = useState(() => {
    const localTasks = localStorage.getItem("tasks");
    if (localTasks == null) return [];
    return JSON.parse(localTasks);
  });

  // UseEffect To Change LocalStorage EveryTime Todos Are Changed:
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  function addTodos(title, date) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
          date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
          time: `${date.getHours()}:${date.getMinutes()}`,
        },
      ];
    });
  }

  // Fucntion to Toggle ToDo CheckBox
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        } else {
          return todo;
        }
      });
    });
  }
  function deleteTask(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <div className="header">To-Do List Using React</div>
      <NewToDoForm onSubmit={addTodos} />
      <TodoList todos={todos} deleteTask={deleteTask} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;

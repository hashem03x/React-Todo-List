import React from 'react'

function TodoList({todos , deleteTask , toggleTodo}) {

    return (
    <ul className="list">
      <div className="header">To-Do List</div>
      {todos.length === 0 && <h3 style={{fontSize:"22px"}}>No Tasks</h3>}
      {todos.map(todo=>{
        return(
          <li key={todo.id}>
            <label>
            <input type="checkbox"
            checked={todo.completed}
            onChange={e=>toggleTodo(todo.id , e.target.checked)}
            />
                <div className="holder">
                    <div className="title">
                    {todo.title}
                    </div>
                    <div className="time">
                    {todo.date} At {todo.time}
                    </div>
                </div>
              <button className="del" onClick={()=>deleteTask(todo.id)}>Delete</button>
            </label>
          </li>
        )
      })}
    </ul> 
     )

}

export default TodoList
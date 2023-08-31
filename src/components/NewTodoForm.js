import React, { useState } from 'react'

function NewToDoForm({onSubmit}) {
    // UseState For Tasks:
    const [task , setTask] = useState("");

    // Function To HandleSubmit Button:
    function handleSubmit(e){
      e.preventDefault();
      if(task === "") return;

      const date = new Date();
      onSubmit(task , date);

      setTask("");

    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
      <input type='submit' value="Add Task" />
    </form>
  )
}

export default NewToDoForm
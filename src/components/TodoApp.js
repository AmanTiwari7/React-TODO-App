import "./TodoApp.css";
import { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([])

  const [taskName, setTaskName] = useState()
  const [taskDetails, setTaskDetails] = useState()
  const [taskDate, setTaskDate] = useState()
  const [info, setInfo] = useState()
  
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      taskName: taskName,
      taskDetails: taskDetails,
      taskDate: taskDate,
      info: info
    }
    setTasks([...tasks, newTask])

    setTaskName('')
    setTaskDate('')
    setTaskDetails('')
    setInfo('')
  }

  const handleDelete = (id) => {
    console.log("Calling the delete function for:", id)
    return
  }
  const handleEdit = (id) => {
    console.log("Calling the Edit function for:", id)
    return
  }

  return (
    <div class="container">
      <div>
        <h1>Todo List</h1>
        <hr />
      </div>
      <div>
        <input placeholder="Enter a Task" value={taskName} onChange={(e) => { setTaskName(e.target.name) }}></input>
        <button onClick={() => { addTask() }}>Add</button>
        <hr />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="table-header">Task Name</th>
              <th className="table-header">Task Details</th>
              <th className="table-header">Task Date</th>
              <th className="table-header">Info</th>
              <th className="table-header">Edit</th>
              <th className="table-header">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="6">
                  No task yet.  Add one above!
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id}>
                  <th scope="row">{task.taskName}</th>
                  <td className="table-cell">Complete React Project</td>
                  <td className="table-cell">
                    Build a todo app with add, edit, and delete features
                  </td>
                  <td className="table-cell">2025-10-01</td>
                  <td className="table-cell">High Priority</td>
                  <td className="table-cell">
                    <button className="btn-edit" onClick={() => handleEdit(tasks.id)}> ✏️ </button>
                  </td>
                  <td className="table-cell">
                    <button className="btn-delete" onClick={() => handleDelete(tasks.id)}> 🗑️ </button>
                  </td>
                </tr>
              ))
            )
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">Total Tasks: {tasks.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;

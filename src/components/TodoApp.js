import "./TodoApp.css";

const TodoApp = () => {
  return (
    <div class="container">
      <div>
        <h1>Todo List</h1>
        <hr />
      </div>
      <div>
        <input placeholder="Enter a Task"></input>
        <button>Add</button>
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
            <tr>
              <td className="table-cell">Complete React Project</td>
              <td className="table-cell">
                Build a todo app with add, edit, and delete features
              </td>
              <td className="table-cell">2025-10-01</td>
              <td className="table-cell">High Priority</td>
              <td className="table-cell">
                <button className="btn-edit">Edit</button>
              </td>
              <td className="table-cell">
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;

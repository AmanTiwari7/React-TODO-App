const TodoApp = () => {
  const tabelStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd'
  };

  const thStyle = {
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold'
  };
  
  return (
    <div>
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
        <table style={tabelStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Task Name</th>
              <th style={thStyle}>Task Details</th>
              <th style={thStyle}>Task Date</th>
              <th style={thStyle}>Info</th>
              <th style={thStyle}>Edit</th>
              <th style={thStyle}>Delete</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;

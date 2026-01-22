import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  
  function handleAdd() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }

    setTask("");
  }

  
  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  
  function handleEdit(index) {
    setTask(tasks[index].text);
    setEditIndex(index);
  }

  
  function handleComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>To-Do List App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter the task..."
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              onClick={() => handleComplete(index)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>

            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

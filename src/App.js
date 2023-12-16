import "./App.css";
import { useState } from "react";

const INITIAL_TASKS = ["Feed a dog", "Wash the car", "Paint the walls"];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  return (
    <>
      <h1>TODO list</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>
            <input type="checkbox" />
            {task}
            <button type="button">x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

const INITIAL_TASKS = ["Feed a dog", "Wash the car", "Paint the walls"];

function App() {
  const [allTasks, setAllTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isShownAllTasks, setIsShownAllTasks] = useState(true);
  const [tasksToShow, setTasksToShow] = useState(allTasks);

  function addNewTask() {
    setAllTasks([...allTasks, newTask]);
    setNewTask("");
    setTasksToShow(isShownAllTasks ? [...allTasks, newTask] : completedTasks);
  }

  function removeTask(taskToRemove) {
    setAllTasks(allTasks.filter((task) => task !== taskToRemove));
    setCompletedTasks(completedTasks.filter((task) => task !== taskToRemove));

    setTasksToShow(
      isShownAllTasks
        ? allTasks.filter((task) => task !== taskToRemove)
        : completedTasks.filter((task) => task !== taskToRemove)
    );
  }

  function completeTask(task) {
    setCompletedTasks([...completedTasks, task]);
  }

  function showCompletedTasks() {
    setTasksToShow(() => (isShownAllTasks ? completedTasks : allTasks));
    setIsShownAllTasks((isShown) => !isShown);
  }

  return (
    <>
      <h1>TODO list</h1>
      <ul>
        {tasksToShow.map((task) => (
          <li key={task}>
            <input type="checkbox" onClick={() => completeTask(task)} />
            {task}
            <button type="button" onClick={() => removeTask(task)}>
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addNewTask}>Add new task</button>
      </div>
      <button onClick={showCompletedTasks}>
        {isShownAllTasks ? "Show completed tasks" : "Show all tasks"}
      </button>
    </>
  );
}

export default App;

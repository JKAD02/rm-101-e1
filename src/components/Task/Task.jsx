import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";
import { DataContext } from "../../Context/DataContext";
import { useContext } from "react";


const Task = ({ task }) => {
  // NOTE: do not delete `data-testid` key value pair
  const { removeTask, toggleTask } = useContext(DataContext)

  const handleToggle = (e, id) => {
    e.target.checked ? toggleTask(id, true) : toggleTask(id, false);
  }

  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" defaultChecked={task.done} data-testid="task-checkbox" onChange={(e) => handleToggle(e, task.id)} />
      <div data-testid="task-text" className={task.done ? styles.line : null}>{task.text}</div>
      {/* Counter here */}
      <Counter countT={task.count} id={task.id} />
      <button data-testid="task-remove-button" onClick={() => {
        removeTask(task.id)
      }}>x</button>
    </li>
  );
};

export default Task;

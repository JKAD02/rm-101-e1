import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";


const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  const { data } = useContext(DataContext)
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {data.length !== 0 ? null : "Empty list Add a new task above"}
      </div>
    </>
  );
};

export default Tasks;

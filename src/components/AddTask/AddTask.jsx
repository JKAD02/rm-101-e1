import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../../Context/DataContext";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair

  const { data, addTask } = useContext(DataContext)
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    const newTask = {
      id: data.length + 1,
      text: task,
      done: false,
      count: 1
    };

    addTask(newTask);

    setTask("");
  };

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" placeholder="Add Task..." value={task} onChange={handleChange} type="text" />
      <button data-testid="add-task-button" onClick={handleSubmit}>+</button>
    </div>
  );
};

export default AddTask;

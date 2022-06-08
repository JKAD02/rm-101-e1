import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  const { data } = useContext(DataContext)
  let totalTask = 0;
  let unCompletedTask = 0;

  const getTotalTask = () => {
    totalTask = data.length;

    data.filter((task) => {
      return task.done === false ? unCompletedTask++ : null
    });
  };

  getTotalTask();

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">You have {unCompletedTask} of </b>
      <b data-testid="header-total-task">{totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;

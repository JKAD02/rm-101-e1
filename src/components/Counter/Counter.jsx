import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import styles from "./counter.module.css";

const Counter = ({ countT, id }) => {
  // sample value to be replaced
  let count = 0;

  const { updateTask } = useContext(DataContext)

  const handleCounter = (value) => {
    if (value === -1 && countT <= 1) {
      updateTask(id, countT);
    } else {
      count = countT + value;
      updateTask(id, count);
    }
  }


  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={() => handleCounter(1)}>+</button>
      <span data-testid="task-counter-value">{countT}</span>
      <button data-testid="task-counter-decrement-button" onClick={() => handleCounter(-1)}>-</button>
    </div>
  );
};

export default Counter;

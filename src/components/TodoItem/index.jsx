import React from 'react';
import styles from './TodoItem.module.css'

export function TodoItem({ todo, toggleTask }) {
  const {id, task, completed} = todo;

  const handleTodoClick = () => {
    toggleTask(id);
  };

  return (
    <li className={styles.task}>
      <label>
        <input className={styles.check} type="checkbox" checked={completed} onChange={handleTodoClick} />
        <span className={styles.taskDescription}>{task}</span>
      </label>
    </li>
  );
}
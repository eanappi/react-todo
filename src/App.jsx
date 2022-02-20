import React, { Fragment, useState, useRef, useEffect } from 'react';
import styles from './App.module.css'
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './components/TodoList';

export function App() {
  const [todos, setTodos] = useState([
    {id: 1, task: 'Lola', completed: false}
  ]);

  const localStorageKey = 'todoApp.todos';

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey));
    if(storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

  const taskTodoRef = useRef();
  console.log('lolll')

  const handleAddTodo = () => {
    const task = taskTodoRef.current.value;
    if(task === '') return;

    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), task, completed: false}]
    })

    taskTodoRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  const toggleTask = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <section>
      <h1 className={styles.title}>Todo</h1>
      <TodoList todos={todos} toggleTask={toggleTask} />
      <div className={styles.newTask}>
        <input ref={taskTodoRef} type="text" placeholder="New Task" />
        <button onClick={handleAddTodo}>+</button>
        <button onClick={handleClearAll}>-</button>
      </div>
      <div>
        <code>It remains to finish {todos.filter(todo => !todo.completed).length} tasks</code>
      </div>
    </section>
  );
}
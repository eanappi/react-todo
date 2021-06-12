import React from 'react';
import { TodoItem } from '../TodoItem';

export function TodoList({ todos, toggleTask }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}
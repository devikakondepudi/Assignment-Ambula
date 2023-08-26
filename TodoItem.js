import React from 'react';

const TodoItem = ({ task, completed, toggleComplete, removeTask }) => {
  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span>{task}</span>
      <button onClick={toggleComplete}>Toggle Complete</button>
      <button onClick={removeTask}>Remove</button>
    </div>
  );
};

export default TodoItem;

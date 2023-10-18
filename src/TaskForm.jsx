import React, { useState, useContext, useRef, useCallback } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addTask({ id: Math.random(), title: taskTitle });
      setTaskTitle('');
      inputRef.current.focus();
    },
    [addTask, taskTitle]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
        ref={inputRef}
      />
      <button type="submit">Add Task</button>
    </form>
  );
  
};

export default TaskForm;

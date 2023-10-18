import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

  const TaskList = () => {
    const { tasks, removeTask } = useContext(TaskContext);
  
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  };
  
export default TaskList;

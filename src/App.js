import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { TaskProvider } from './TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;


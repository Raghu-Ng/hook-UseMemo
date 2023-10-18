import React, { useReducer, useEffect, useMemo } from 'react';

const initialState = { tasks: [] };

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'REMOVE_TASK':
      return { tasks: state.tasks.filter((task) => task.id !== action.payload) };
    default:
      return state;
  }
};

const fetchTasks = async () => {
  return [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' }
  ];
};

const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await fetchTasks();
      dispatch({ type: 'ADD_TASK', payload: tasks });
    };

    fetchData();
  }, []);

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const removeTask = (taskId) => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  const memoizedValue = useMemo(() => ({ tasks: state.tasks, addTask, removeTask }), [
    state.tasks,
    addTask,
    removeTask,
  ]);

  return <TaskContext.Provider value={memoizedValue}>{children}</TaskContext.Provider>;
};

export { TaskProvider, TaskContext };

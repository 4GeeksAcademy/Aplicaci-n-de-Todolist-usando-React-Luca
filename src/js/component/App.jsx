import React, { useState } from 'react';
import ToDoList from './ToDoList';
import TaskInput from './TaskInput';
import '../../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };


  const tasksPending = tasks.length;

  return (
    <div className="app-container">
      <h1>todos</h1>
      <TaskInput onAddTask={addTask} />
      <ToDoList tasks={tasks} onDeleteTask={deleteTask} />
      {tasks.length > 0 ? (
        <div className="task-counter">
          {tasksPending} item{tasksPending !== 1 && 's'} left
        </div>
      ) : (
        <div className="task-counter">
          No hay tareas, añadir tareas
        </div>
      )}
    </div>
  );
};

export default App;

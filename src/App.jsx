import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id:Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    console.log("Tarea eliminada con ID:", taskId);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    console.log("Tarea completada con ID:", taskId);
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className='App'>
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul className='task-list'>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul> 
      </div>
  );
};

export default App;

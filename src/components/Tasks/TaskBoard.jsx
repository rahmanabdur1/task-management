import React, { useState } from 'react';
import TaskList from './TaskLists';


const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'To-Do' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'Completed' }
  ]);

  return (
    <div className="task-board">
      <h2>Task Board</h2>
      <div className="task-lists">
        <div className="task-list">
          <h3>To-Do</h3>
          <TaskList tasks={tasks.filter(task => task.status === 'To-Do')} />
        </div>
        <div className="task-list">
          <h3>In Progress</h3>
          <TaskList tasks={tasks.filter(task => task.status === 'In Progress')} />
        </div>
        <div className="task-list">
          <h3>Completed</h3>
          <TaskList tasks={tasks.filter(task => task.status === 'Completed')} />
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;

import React, { useEffect } from 'react';
import TaskCard from './TaskCard';
import api from '../services/api';

const TaskList = (props) => {  

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.getTaskFilter();

        const tasksData = response.data.data;
        props.updateTask(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);


  return (
    <React.Fragment>
      {props.task.map((task) => (
          <TaskCard key={task._id} task={task} />
      ))}
    </React.Fragment>
  );
};


export default TaskList;
 
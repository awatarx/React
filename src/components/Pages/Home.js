import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from '../AppNavbar';
import Button from '../Button';
import TaskList from '../TaskList';
import TaskModal from '../TaskModel';
import FilterTask from '../FilterTask'
import api from '../../services/api'

 
const Home = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'low',
        deadline: '',
        status: 'pending',
    });
 
    const [tasks, setTasks] = useState([]);


    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = async () => {

        setShowModal(false);
        try {
            const tasksData = await api.getTasks();
            setTasks(tasksData);
      
          } catch (error) {
            console.error('Error Updating tasks:', error);
          }

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSaveTask = async () => {
        try {
            await api.saveTask(formData);

            setFormData({
                title: '',
                description: '',
                priority: 'low',
                deadline: '',
                status: 'pending',
            });
            handleCloseModal();

        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                const errorMessage = validationErrors.map((error) => error.msg).join(', ');
                alert(`Error: ${errorMessage}`);
            } else {
                console.error('Error saving task:', error);
                alert('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div>
            <AppNavbar />
            <Container>
            <FilterTask task={tasks} updateTask={setTasks}/>
                <div className='d-flex justify-content-end my-2'>
                    <Button variant="primary" size="" onClick={handleShowModal}>
                        New Task
                    </Button>
                </div>
                <TaskList task={tasks} updateTask={setTasks} />
                <TaskModal
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    handleSaveTask={handleSaveTask}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    task={tasks} updateTask={setTasks}
                />
            </Container>
        </div>
    );
};

export default Home;
 
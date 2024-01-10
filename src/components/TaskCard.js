
import React, { useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import api from '../services/api';

const TaskCard = ({ task }) => {
    const { title, description, priority, deadline, is_completed } = task;

    const [status, setStatus] = useState(is_completed ? 'Completed' : 'Pending');

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        const numericStatus = mapStatusToNumeric(newStatus);
        sendApiRequest(task, numericStatus);
    };

    const mapStatusToNumeric = (status) => {
        return status === 'Completed' ? 1 : 0;
    };


    const sendApiRequest = async (task, numericStatus) => {
        task.is_completed = numericStatus;
    
        try {
            
            const response = await api.updateCard(task);
            console.log(response);

        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                const validationErrors = error.response.data.errors;
                console.error('Validation errors:', validationErrors);
    
                const errorMessage = validationErrors.map((error) => error.msg).join(', ');
                alert(`Error: ${errorMessage}`);
            } else {
                console.error('Error saving task:', error);
                alert('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <Card className='my-2'>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div>
                    <strong>Description:</strong> {description}
                    <br />
                    <strong>Priority:</strong> {priority}
                    <br />
                    <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
                    <br />
                    <strong>Status:</strong>{' '}
                    <Dropdown onSelect={handleStatusChange}>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            {status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                            <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskCard;

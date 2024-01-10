// TaskForm.js
import React from 'react';
import { Form } from 'react-bootstrap';

const TaskForm = ({ formData, handleInputChange }) => {
    return (
        <Form>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                    as="select"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDeadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                    as="select"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                >
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
};


export default TaskForm;

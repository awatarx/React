import React from 'react';
import { Modal, Button as BootstrapButton } from 'react-bootstrap';
import TaskForm from './TaskForm';

const TaskModal = ({ showModal, handleCloseModal, handleSaveTask, formData, handleInputChange }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm formData={formData} handleInputChange={handleInputChange} />
      </Modal.Body>
      <Modal.Footer>
        <BootstrapButton variant="secondary" onClick={handleCloseModal}>
          Close
        </BootstrapButton>
        <BootstrapButton variant="primary" onClick={handleSaveTask}>
          Save Task
        </BootstrapButton>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;

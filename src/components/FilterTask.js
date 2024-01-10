import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import api from '../services/api'

const SearchComponent = ( props) => {

  const [taskFilter, setTaskFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [deadlineFilter, setDeadlineFilter] = useState('');

  const handleTaskChange = (e) => {
    setTaskFilter(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadlineFilter(e.target.value);
  };

  const handleSearch = async () => {
    const queryParams = {};
    if (taskFilter) queryParams.title = taskFilter;
    if (priorityFilter) queryParams.priority = priorityFilter;
    if (deadlineFilter) queryParams.deadline = deadlineFilter;

    try {
      const response = await api.filterTask(queryParams);
      const tasksData = response.data.data;
      props.updateTask(tasksData);

    } catch (error) {
      console.error('Error searching tasks:', error);
    }
  };

  return (
    <Form className='mt-3'>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Task"
            value={taskFilter}
            onChange={handleTaskChange}
          />
        </Col>
        <Col>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Form.Group controlId="priorityFilter" className='col-md-3'>
          <Form.Label>Priority:</Form.Label>
          <Form.Control as="select" value={priorityFilter} onChange={handlePriorityChange}>
            <option value="">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="deadlineFilter" className='col-md-3'>
          <Form.Label>Deadline:</Form.Label>
          <Form.Control as="select" value={deadlineFilter} onChange={handleDeadlineChange}>
            <option value="">All</option>
            <option value="past">Past</option>
            <option value="today">Today</option>
            <option value="future">Future</option>
          </Form.Control>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default SearchComponent;

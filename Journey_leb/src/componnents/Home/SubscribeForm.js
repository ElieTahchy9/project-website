import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SubscribeForm = ({ show, handleClose, handleSubscribe }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubscribe(email);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Subscribe to Our Newsletter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SubscribeForm;

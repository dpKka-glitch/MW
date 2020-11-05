import React, { useRef } from "react";

import { Modal, Form } from "react-bootstrap";
import { Button } from "shards-react";

export default function NewContact({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    // createContact(idRef.current.value , nameRef.current.value )
    closeModal();
  }
  return (
    <>
      <Modal.Header onHide={closeModal} closeButton>
        {" "}
        New Conversation{" "}
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" theme="success">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}

import React, { useRef } from "react";
import { Form, FormGroup, FormInput, Container, Button } from "shards-react";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSubmit }) {
  const IdRef = useRef();
  function handleSubmit(e) {
    e.preventdDefault();
    onIdSubmit(IdRef.current.value);
  }
  function createNewId() {
    onIdSubmit(uuidV4);
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <FormGroup>
          <label htmlFor="Id">ID</label>
          <FormInput id="Id" required innerRef={IdRef} />
        </FormGroup>
        <Button theme="success" type="submit" className="mr-2">
          Login
        </Button>
        <Button outline theme="info" onClick={createNewId}>
          Create a new id
        </Button>
      </Form>
    </Container>
  );
}

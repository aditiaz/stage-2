import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { React, useContext, useState } from "react";
import { RoomsContext } from "../context/roomsContext";

export const SignIn = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { handleSignInChange, handleSignInSubmit, signInForm } = useContext(RoomsContext);
  console.log(signInForm);
  // console.log(localStorage.getItem("UserSignIn"));

  return (
    <Modal
      // show={show}
      // onHide={handleClose}
      className="d-flex justifycontent-center w-25"
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <h2 className="d-flex justify-content-center my-3">Sign In</h2>

      <Modal.Body>
        <Form onSubmit={handleSignInSubmit} className="fw-bold">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleSignInChange}
              id="username"
              name="username"
              type="text"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleSignInChange}
              id="password"
              name="password"
              style={{ resize: "none" }}
              type="password"
              rows={1}
            />
          </Form.Group>
          {/* <Col className="d-flex justify-content-center"> */}
          <Button
            type="submit"
            className="w-100 click"
            style={{ border: "none" }}
            onClick={handleClose}
          >
            Sign In
          </Button>
          {/* </Col> */}
        </Form>
        <h6 className="d-flex justify-content-center text-secondary my-3">
          Don't have an account? click &nbsp;
          <a className="nav-link fw-bold" href="">
            Here
          </a>
        </h6>
      </Modal.Body>
    </Modal>
  );
};

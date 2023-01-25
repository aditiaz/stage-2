import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { RoomsContext } from "../context/roomsContext";
import { React, useContext, useState } from "react";
import { SignIn } from "./Sign-in";

export const SignUp = (props) => {
  const { setModalSignIn, setModalSignUp, modalSignUp, modalSignIn } = useContext(RoomsContext);

  const { handleSignUpChange, handleSignUpSubmit } = useContext(RoomsContext);
  // console.log(localSignUpForm2);
  const listAs = [{ value: "" }, { value: "Tenant" }, { value: "Admin" }];
  const gender = [{ value: "" }, { value: "Man" }, { value: "Woman" }];

  return (
    <Modal
      className="d-flex justifycontent-center w-25 h-"
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <h2 className="d-flex justify-content-center my-3">Sign Up</h2>

      <Modal.Body style={{ height: "20rem", overflow: "hidden", overflow: "auto" }}>
        <Form onSubmit={handleSignUpSubmit} className="fw-bold">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              onChange={handleSignUpChange}
              id="fullname"
              name="fullname"
              type="text"
              rows={1}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleSignUpChange}
              id="username"
              name="username"
              type="text"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleSignUpChange}
              id="email"
              name="email"
              type="email"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleSignUpChange}
              id="password"
              name="password"
              type="password"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>List As</Form.Label>
            <Form.Select
              onChange={handleSignUpChange}
              id="listAs"
              name="listAs"
              type="text"
              autoFocus
            >
              {listAs.map((e) => {
                return <option>{e.value}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              onChange={handleSignUpChange}
              id="gender"
              name="gender"
              type="text"
              autoFocus
            >
              {gender.map((e) => {
                return <option>{e.value}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={handleSignUpChange}
              id="phone"
              name="phone"
              type="text"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleSignUpChange}
              id="address"
              name="address"
              type="text"
              style={{ resize: "none" }}
              autoFocus
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 click"
            style={{ border: "none" }}
            onClick={() => {
              {
                // handleClose();
                setModalSignIn(true);
                setModalSignUp(false);
                // setModalShow2(false);
              }
            }}
          >
            Sign Up
          </Button>
          <SignIn show={modalSignIn} onHide={() => setModalSignUp(false)} />
          {/* </Col> */}
        </Form>
        <h6 className="d-flex justify-content-center text-secondary my-3">
          Already have an account? click &nbsp;
          <p
            onClick={() => {
              {
                // handleClose();
                setModalSignUp(true);
              }
            }}
            className="nav-link fw-bold"
            style={{ cursor: "pointer" }}
          >
            Here
          </p>
        </h6>
      </Modal.Body>
    </Modal>
  );
};

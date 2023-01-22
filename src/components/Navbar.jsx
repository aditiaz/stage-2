import Logo from "../assets/Logo.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";
import * as Components from "./index";
import { useState } from "react";
import { useContext } from "react";
import { RoomsContext } from "../context/roomsContext";
import { useNavigate } from "react-router-dom";

export const Navbars = () => {
  const { rooms } = useContext(RoomsContext);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="d-flex justify-content-around  fixed-top top-0" bg="white">
        <Navbar.Brand href="#home">
          <img
            onClick={() => {
              navigate("/");
            }}
            style={{ width: "200px" }}
            src={Logo}
            alt="logo"
          />
        </Navbar.Brand>
        <InputGroup className="w-25 ">
          <Form.Control
            className="bg-light d-flex "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <BsSearch strokeWidth={0.5} fontSize={29} style={{ cursor: "pointer" }} />
          </InputGroup.Text>
        </InputGroup>
        {localStorage.getItem("UserSignIn") ? (
          <Components.DropdownNav />
        ) : (
          <div className="d-flex justify-content-around gap-5">
            <Components.SignIn
              className="d-flex justify-content-center"
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Button
              onClick={() => setModalShow(true)}
              // disabled
              className="text-secondary fw-bold"
              style={{ backgroundColor: "rgba(255, 255, 255, 1)", border: "none" }}
            >
              Sign In
            </Button>
            <Components.SignUp
              className="d-flex justify-content-center"
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
            <Button
              onClick={() => setModalShow2(true)}
              // disabled
              className="text-secondary fw-bold"
              style={{ backgroundColor: "rgba(255, 255, 255, 1)", border: "none" }}
            >
              Sign up
            </Button>
          </div>
        )}
      </Navbar>
    </>
  );
};

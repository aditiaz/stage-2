import Logo from "../assets/Logo.svg";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";

export const Navbars = () => {
  return (
    <>
      <Navbar className="d-flex justify-content-around  fixed-top top-0" bg="white">
        <Navbar.Brand href="#home">
          <img style={{ width: "200px" }} src={Logo} alt="logo" />
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

        <div className="d-flex justify-content-around gap-5">
          <Button
            disabled
            className="text-secondary fw-bold"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)", border: "none" }}
          >
            Sign In
          </Button>

          <Button
            className="fw-bold"
            style={{ backgroundColor: "rgba(196, 196, 196, 0.25)" }}
            variant="light"
          >
            Sign Up
          </Button>
        </div>
      </Navbar>
    </>
  );
};

// export default Navbars;

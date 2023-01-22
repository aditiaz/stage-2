import React, { useContext, useState } from "react";
import * as Components from "../components";
import bed from "../assets/bed.svg";
import bathub from "../assets/bathub.svg";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { RoomsContext } from "../context/roomsContext";
import moment from "moment";

export const DetailProperty = () => {
  const today = moment().format(" Do MMMM YYYY");
  const { rooms } = useContext(RoomsContext);
  const { room } = useParams();
  const detailRoom = rooms[room - 1];
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checkIn, setCheckin] = useState({
    check_in: "",
    check_out: "",
  });
  console.log(checkIn);
  const handleCheckInOut = (e) => {
    setCheckin({
      ...checkIn,
      [e.target.name]: e.target.value,
    });
  };
  const handleLocal = () => {
    setShow(true);
    localStorage.setItem("Date", JSON.stringify(checkIn));
  };
  console.log(detailRoom);
  return (
    <>
      <Components.Navbars />;
      <Col className="my-5" style={{ marginInline: "10rem" }}>
        <Col className="w-100  detailPics">
          {/* <Col className="" style={{ backgroundColor: "green", height: "45rem" }}> */}
          <img
            style={{ width: "100%", height: "35rem", marginTop: "65px" }}
            src={`/picsHousy/${detailRoom.imageUrl}`}
            alt="pics"
          />
          {/* </Col> */}
        </Col>
        <Col className="d-flex justify-content-between mt-3 detailPics detailPicsSmall">
          <div>
            <img src={`/picsHousy/${detailRoom.imageUrl}`} alt="pics" />
          </div>
          <div>
            <img src={`/picsHousy/${detailRoom.imageUrl}`} alt="pics" />
          </div>
          <div>
            <img src={`/picsHousy/${detailRoom.imageUrl}`} alt="pics" />
          </div>
        </Col>
        <Col>
          <h1 className="fw-bold my-5" style={{ fontSize: "4.5rem" }}>
            {detailRoom.roomName}
          </h1>
          <div
            className="d-flex mt-3 justify-content-between"
            // style={{ backgroundColor: "salmon" }}
          >
            <div className="p-0 col-8">
              <p style={{ fontSize: "2rem", backgroundColor: "white" }}>
                Rp.{detailRoom.roomCost.toLocaleString()} / Year
              </p>
              <p className="text-secondary" style={{ fontSize: "1rem", width: "20rem" }}>
                {detailRoom.roomStreetAddress}, {detailRoom.districtAddress},
                {detailRoom.townAddress}
              </p>
            </div>
            <div
              className="d-flex col-4 justify-content-between"
              //   style={{ backgroundColor: "green" }}
            >
              <div className="text-secondary">
                <h5>Bedrooms</h5>
                <div className="d-flex justify-content-center">
                  <div className="d-flex mt-2 justify-content-around  text-black  w-100">
                    <h3>{detailRoom.bedRoom}</h3>
                    <img src={bed} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-secondary">
                <h5>Bathrooms</h5>
                <div className="d-flex justify-content-center">
                  <div className="d-flex mt-2 justify-content-around  text-black  w-100">
                    <h3>{detailRoom.bathRoom}</h3>
                    <img src={bathub} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-secondary">
                <h5>Area</h5>
                <div className="d-flex justify-content-center">
                  <div className="d-flex mt-2 justify-content-around  text-black  w-100">
                    <h3 className="fw-bold">{detailRoom.roomSize} ft</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="fw-bold">Description</h1>
          <p className="text-secondary ">{detailRoom.roomDesc}</p>
          {localStorage.getItem("UserSignIn") ? (
            <>
              <div className="d-flex justify-content-end w-100 my-5">
                <Button
                  className="click fw-bold"
                  style={{ width: "15rem", height: "3.5rem", fontSize: "1.5rem" }}
                  onClick={handleShow}
                >
                  Book Now
                </Button>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="d-flex align-middle  justify-content-center">
                  <Modal.Title>How long will you stay ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      style={{ display: "flex", flexDirection: "column" }}
                      controlId="exampleForm.ControlInput1"
                    >
                      <h4 className="text-center">Today is {today}</h4>
                      <Form.Label style={{ fontWeight: "bold" }}>Check-in</Form.Label>
                      <input type="date" name="check_in" onChange={handleCheckInOut} />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      style={{ display: "flex", flexDirection: "column" }}
                      controlId="exampleForm.ControlInput1"
                    >
                      {/* <Calendar name="check_out" onChange={handleCheckInOut} /> */}
                      <Form.Label style={{ fontWeight: "bold" }}>Check-Out</Form.Label>
                      <input
                        type="date"
                        data-provide="datepicker"
                        name="check_out"
                        onChange={handleCheckInOut}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer
                  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleLocal();
                      navigate(`/booking/${room}`);
                    }}
                    style={{ backgroundColor: "#5A57AB", width: 200 }}
                  >
                    Order
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ) : (
            <></>
          )}
        </Col>
      </Col>
    </>
  );
};

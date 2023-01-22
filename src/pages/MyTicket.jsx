import { Table, Container, Button, Modal, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { RoomsContext } from "../context/roomsContext";
import React, { useContext, useState } from "react";
import { Navbars } from "../components";

export function MyBooking() {
  // const {id} = useParams()
  const { rooms } = useContext(RoomsContext);
  const { booking } = useParams();
  const detailRoom = rooms[booking - 1];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getData = JSON.parse(localStorage.getItem("Date"));
  const getProfile = JSON.parse(localStorage.getItem("UserSignUp"));
  console.log(getProfile);
  // console.log(getData,"hallo guys")
  // console.log(props.hotel[id].price)
  return (
    <Container>
      <Navbars />
      <Row style={{ marginTop: "15rem" }}>
        <div
          style={{
            marginTop: 30,
            boxShadow: "0px 0px 1px",
            borderRadius: 10,
            padding: "0px 30px 0px 30px",
          }}
        >
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div className="p-4">
              <img src="/img/Icon.svg" width={110} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2 className="p-3">Booking</h2>
              <h5>{getData.check_in}</h5>
            </div>
          </div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <div>
              <h3 className="md-5">{detailRoom.roomName}</h3>
              <Col md={8}>
                <p>{detailRoom.roomStreetAddress}</p>
              </Col>
              <img src="/img/prove.svg" alt="" />
            </div>
            <div style={{ marginRight: -80, marginTop: 10 }}>
              <img src="/img/prove.svg" alt="" />
            </div>
            <div>
              <Col md={15}>
                <div>
                  <h5>Check-in</h5>
                  <p style={{ color: "grey" }}>{getData?.check_in}</p>
                </div>
                <div>
                  <h5>Check-Out</h5>
                  <p style={{ color: "grey" }}>{getData?.check_out}</p>
                </div>
              </Col>
            </div>
            <div>
              <div>
                <h5>Amenities</h5>
                <p style={{ color: "grey" }}>Furnished</p>
              </div>
              <div>
                <h5>Type of Rent</h5>
                <p style={{ color: "grey" }}>Year</p>
              </div>
            </div>
            <div
              className="d-flex"
              style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}
            >
              <img src="/image/Nota.svg" alt="" style={{ width: 150, height: "auto" }} />
            </div>
          </div>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ color: "grey" }}>{getProfile?.fullname}</td>
                <td style={{ color: "grey" }}>{getProfile?.gender}</td>
                <td style={{ color: "grey" }}>{getProfile?.phone}</td>
                <td style={{ fontWeight: "bold" }}>Long Time rent</td>
                <td>:</td>
                <td style={{ fontWeight: "bold" }}>1 Year</td>
              </tr>
              <tr>
                <td colSpan={5} style={{ fontWeight: "bold" }}>
                  Total
                </td>
                <td>:</td>
                <td style={{ fontWeight: "bold", color: "red" }}> Rp {detailRoom.roomCost}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button style={{ width: 200, marginTop: "2rem" }} onClick={handleShow}>
            PAY
          </Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Body>
              Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat pesanan{" "}
              <a href={`/myticketpending/${detailRoom}`}>Klik Disini</a> Terimakasih
            </Modal.Body>
          </Modal>
        </div>
      </Row>
    </Container>
  );
}
export default MyBooking;

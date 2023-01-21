import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { RoomsContext } from "../context/roomsContext";
import { useNavigate } from "react-router-dom";

export const RoomsCard = () => {
  const { rooms } = useContext(RoomsContext);
  const navigate = useNavigate();

  return (
    <Col size="lg" style={{ marginBlock: "1rem", marginInlineStart: "25rem" }}>
      <CardGroup
        className="gap-3 mx-3   d-flex justify-content-between"
        style={{ marginTop: "12rem" }}
      >
        {rooms.map((e) => {
          return (
            <Col xs={3} sm={3} style={{ width: "25rem" }}>
              <Card key={e.imageUrl}>
                <span
                  className="position-absolute fw-bold p"
                  style={{
                    padding: "4px",
                    width: "5.5rem",
                    backgroundColor: "white",
                    top: "20px",
                    left: "20px",
                    borderRadius: "5px",
                  }}
                  variant="primary"
                >
                  Furnished
                </span>
                <Card.Img
                  onClick={() => navigate(`detail/${e.id}`)}
                  variant="top"
                  src={`/picsHousy/${e.imageUrl}`}
                />

                <Card.Body>
                  <Card.Title>
                    Rp.{e.roomCost.toLocaleString()} / {e.period}
                  </Card.Title>
                  <Card.Text>
                    <p className="fw-bold">
                      {e.bedRoom} beds,{e.bathRoom} baths,{e.roomSize} sqft
                    </p>
                    <p className="text-secondary">
                      {e.townAddress},{e.districtAddress}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </CardGroup>
    </Col>
  );
};

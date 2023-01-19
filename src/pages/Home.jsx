import React from "react";
import * as Components from "../components";
import { Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Components.Navbars />
      <Row>
        <Components.SideBar />
        <Components.RoomsCard />
      </Row>
    </div>
  );
};

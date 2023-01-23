import React from "react";
import * as Components from "../components";
import { Row } from "react-bootstrap";
import IndexOwner from "./IndexOwner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const roles = localStorage.Roles;

  useEffect(() => {
    navigate("/");
  }, [roles]);

  return (
    <div>
      <Components.Navbars />
      {roles === "Admin" ? (
        <IndexOwner />
      ) : (
        <Row>
          <Components.SideBar />
          <Components.RoomsCard />
        </Row>
      )}
      {/* <Components.Navbars /> */}
      {/* <Row>
        <Components.SideBar />
        <Components.RoomsCard />
      </Row> */}
    </div>
  );
};

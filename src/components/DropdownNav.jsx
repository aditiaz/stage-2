import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsPerson, BsCalendar3 } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import React from "react";

export const DropdownNav = () => {
  const navigate = useNavigate();
  return (
    <DropdownButton
      style={{ color: "purple" }}
      id="dropdown-basic-button"
      title="Dropdown button"
      variant="primary"
    >
      <Dropdown.Item className="dropDownNav">
        <BsPerson />
        <span style={{ color: "black" }}> Profile</span>
      </Dropdown.Item>
      <Dropdown.Item className="dropDownNav">
        <RiNewspaperLine />
        <span style={{ color: "black" }}> My Booking</span>
      </Dropdown.Item>
      <Dropdown.Item className="dropDownNav">
        <BsCalendar3 />

        <span style={{ color: "black" }}> History</span>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={() => {
          navigate("/");
          localStorage.removeItem("UserSignIn");
        }}
        className="dropDownNav"
      >
        <FiLogOut />
        <span style={{ color: "black" }}> Logout </span>
      </Dropdown.Item>
    </DropdownButton>
  );
};

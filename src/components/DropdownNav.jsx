import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsPerson, BsCalendar3 } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

import React from "react";

export const DropdownNav = () => {
  return (
    <DropdownButton
      style={{ color: "purple" }}
      id="dropdown-basic-button"
      title="Dropdown button"
      variant="primary"
    >
      <Dropdown.Item className="dropDownNav" href="#/action-1">
        <BsPerson />
        <span style={{ color: "black" }}> Profile</span>
      </Dropdown.Item>
      <Dropdown.Item className="dropDownNav" href="#/action-2">
        <RiNewspaperLine />
        <span style={{ color: "black" }}> My Booking</span>
      </Dropdown.Item>
      <Dropdown.Item className="dropDownNav" href="#/action-3">
        <BsCalendar3 />

        <span style={{ color: "black" }}> History</span>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className="dropDownNav" href="#/action-3">
        <FiLogOut />

        <span style={{ color: "black" }}> Logout </span>
      </Dropdown.Item>
    </DropdownButton>
  );
};

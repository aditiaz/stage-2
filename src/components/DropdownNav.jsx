import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsPerson, BsCalendar3 } from "react-icons/bs";
import { RiNewspaperLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.jpg";
import React from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export const DropdownNav = () => {
  const navigate = useNavigate();
  return (
    <Dropdown
      style={{ color: "white", backgroundColor: "white", border: "white" }}
      id="dropdown-basic-button"
      title="Dropdown button"
    >
      <DropdownToggle variant="white">
        <img
          style={{ width: "3.5rem", borderRadius: "50%", backgroundColor: "black" }}
          src={profilePic}
          alt="pp"
        />
      </DropdownToggle>
      <DropdownMenu>
        <Dropdown.Item
          onClick={() => {
            navigate("/Profile/");
          }}
          className="dropDownNav"
        >
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
      </DropdownMenu>
    </Dropdown>
  );
};

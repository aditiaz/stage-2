import { createContext, useState } from "react";
import datas from "../datas/rooms";
import { useEffect } from "react";

export const RoomsContext = createContext();

export const RoomsContextProvider = (props) => {
  const [rooms, setRooms] = useState(datas);

  const [signForm, setSignForm] = useState({
    username: "",
    password: "",
    email: "",
    listAs: "",
    gender: "",
    phone: "",
    message: "",
  });

  // const { username, password } = signForm;
  const localSignForm = localStorage.getItem("UserSignIn");
  const localSignForm2 = JSON.parse(localSignForm);
  // console.log(localSignIn2);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("UserSignIn", JSON.stringify(signForm));
  };

  const handleChange = (e) => {
    setSignForm({
      ...signForm,
      [e.target.name]: [e.target.value],
    });
  };

  const filterPeriod = (periods, numBed) => {
    const filterData = rooms.filter((time) => time.period === periods);
    // filterData.filter((num) => num.bedRoom === )

    setRooms(filterData);
  };
  return (
    <RoomsContext.Provider
      value={{ localSignForm2, rooms, filterPeriod, handleChange, handleSubmit }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};

import { createContext, useState } from "react";
import datas from "../datas/rooms";
import { useEffect } from "react";

export const RoomsContext = createContext();

export const RoomsContextProvider = (props) => {
  const [rooms, setRooms] = useState(datas);

  const [signForm, setSignForm] = useState({
    username: "",
    password: "",
  });

  // const { username, password } = signForm;
  const localSignIn = localStorage.getItem("UserSignIn");
  const localSignIn2 = JSON.parse(localSignIn);
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
      value={{ localSignIn2, rooms, filterPeriod, handleChange, handleSubmit }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};

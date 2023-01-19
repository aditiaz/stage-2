import { createContext, useState } from "react";
import datas from "../datas/rooms";

export const RoomsContext = createContext();

export const RoomsContextProvider = (props) => {
  const [rooms, setRooms] = useState(datas);
  // console.log(rooms);

  // const filterPeriod = (periods) => {
  //   setRooms(rooms.filter((time) => time.period === periods));
  // }
  const filterPeriod = (periods, numBed) => {
    const filterData = rooms.filter((time) => time.period === periods);
    // filterData.filter((num) => num.bedRoom === )

    setRooms(filterData);
  };
  return (
    <RoomsContext.Provider value={{ rooms, filterPeriod }}>{props.children}</RoomsContext.Provider>
  );
};

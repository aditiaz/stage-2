import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Routes, Route } from "react-router-dom";
// import { RoomsContextProvider } from "./context/roomsContext";
import { Home } from "./pages/Home";
import { DetailProperty } from "./pages/DetailProperty";
import { MyBooking } from "./pages/MyTicket";
import { RoomsContextProvider } from "./context/roomsContext";

function App() {
  return (
    <>
      <RoomsContextProvider>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:room" element={<DetailProperty />} />
          <Route path="/booking/:booking" element={<MyBooking />} />
          <Route path="*" element={<RoomsContextProvider />} />
        </Routes>
        {/* </BrowserRouter> */}
      </RoomsContextProvider>
    </>
  );
}

export default App;

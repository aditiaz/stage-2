import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Routes, Route } from "react-router-dom";
// import { RoomsContextProvider } from "./context/roomsContext";
import { Home } from "./pages/Home";
import { DetailProperty } from "./pages/DetailProperty";
import { MyBooking } from "./pages/MyTicket";
import { RoomsContextProvider } from "./context/roomsContext";
import { Profile } from "./pages/Profile";
import { History } from "./pages/History";

function App() {
  return (
    <>
      <RoomsContextProvider>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:room" element={<DetailProperty />} />
          <Route path="/booking/:room" element={<MyBooking />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/histories/" element={<History />} />
          <Route path="*" element={<RoomsContextProvider />} />
        </Routes>
        {/* </BrowserRouter> */}
      </RoomsContextProvider>
    </>
  );
}

export default App;

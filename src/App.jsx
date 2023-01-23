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
import { HistoryOwner } from "./pages/HistoryOwner";
import MyBookingPending from "./pages/MyBookingPending";
import IndexOwner from "./pages/IndexOwner";
import { ProfileOwner } from "./pages/ProfileOwner";
import { AddProperty } from "./pages/AddProperty";
// import { SignIn } from "./components/Sign-in";

function App() {
  return (
    <>
      <RoomsContextProvider>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:room" element={<DetailProperty />} />
          <Route path="/booking/:room" element={<MyBooking />} />
          <Route path="/bookingPending/" element={<MyBookingPending />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/histories/" element={<History />} />
          <Route path="/historiesOwner/" element={<HistoryOwner />} />
          <Route path="/indexOwner/" element={<IndexOwner />} />
          <Route path="/profileOwner/" element={<ProfileOwner />} />
          <Route path="/addProperty/" element={<AddProperty />} />
          {/* <Route path="/signIn/" element={<SignIn />} /> */}
          <Route path="*" element={<RoomsContextProvider />} />
        </Routes>
        {/* </BrowserRouter> */}
      </RoomsContextProvider>
    </>
  );
}

export default App;

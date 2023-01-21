import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Routes, Route } from "react-router-dom";
// import { RoomsContextProvider } from "./context/roomsContext";
import { Home } from "./pages/Home";
import { RoomsContextProvider } from "./context/roomsContext";

function App() {
  return (
    <>
      <RoomsContextProvider>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<RoomsContextProvider />} />
        </Routes>
        {/* </BrowserRouter> */}
      </RoomsContextProvider>
    </>
  );
}

export default App;

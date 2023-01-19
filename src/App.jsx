import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoomsContextProvider } from "./context/roomsContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <RoomsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RoomsContextProvider>
    </>
  );
}

export default App;

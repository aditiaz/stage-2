import "./App.css";
import Row from "react-bootstrap/Row";
import "react-datepicker/dist/react-datepicker.css";
import * as Components from "./components";

function App() {
  return (
    <>
      <Components.Navbars />
      <Row>
        <Components.SideBar />
        <Components.RoomsCard />
      </Row>
    </>
  );
}

export default App;

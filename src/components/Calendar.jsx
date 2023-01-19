import Row from "react-bootstrap/Row";
import { BsCaretDownFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const tanggal = Date.parse(startDate);
  // console.log(tanggal);
  // console.log(startDate);
  const CustomInput = ({ value, onClick }) => (
    <Row>
      <div
        className="  border border-0 w-100 fw-bold d-flex justify-content-between "
        style={{ fontSize: "1rem" }}
        onClick={onClick}
      >
        {value}
        <BsCaretDownFill className="my-1 " size={20} color={"rgba(90, 87, 171, 1)"} />
      </div>
    </Row>
  );
  return (
    <DatePicker
      className="w-100 text-center "
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      shouldCloseOnSelect={true}
      dateFormat="d MMMM  yyyy "
      customInput={<CustomInput />}
    />
  );
};

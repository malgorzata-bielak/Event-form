import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Input from "./Input";

const EventForm = ({ onChange, date, onDateChange }) => (
  <form autoComplete="off">
    <Input labelName="First name" id="firstname" event={onChange} />

    <Input labelName="Last name" id="lastname" event={onChange} />

    <Input labelName="Email" id="email" event={onChange} />

    <DatePicker selected={date} onChange={onDateChange} />
  </form>
);

export default EventForm;

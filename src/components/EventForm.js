import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const EventForm = ({ onChange, date, onDateChange, onSubmit }) => (
  <form autoComplete="off" onSubmit={onSubmit}>
    <Input labelName="First name" id="firstname" event={onChange} required />

    <Input labelName="Last name" id="lastname" event={onChange} required />

    <Input labelName="Email" id="email" event={onChange} required />

    <DatePicker selected={date} onChange={onDateChange} />

    <SubmitButton />
  </form>
);

export default EventForm;
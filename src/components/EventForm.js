import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const EventForm = ({ onChange, date, onDateChange, onSubmit }) => (
  <form autoComplete="off" onSubmit={onSubmit} id="user-data-form">
    <Input labelName="First name" id="firstname" event={onChange} autofocus />

    <Input labelName="Last name" id="lastname" event={onChange} />

    <Input labelName="Email" id="email" event={onChange} />

    <label>
      Date
      <DatePicker selected={date} onChange={onDateChange} />
    </label>

    <SubmitButton />
  </form>
);

export default EventForm;

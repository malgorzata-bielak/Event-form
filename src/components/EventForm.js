import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";

import Input, { Label, textField } from "./Input";
import SubmitButton from "./SubmitButton";

const Form = styled.form`
  width: 100%;

  @media (min-width: 720px) {
    width: 432px;
  }
`;

const DatePickerStyle = styled(DatePicker)`
  ${textField}
  width: 120px;
`;

const EventForm = ({ onChange, onDateChange, onSubmit, date }) => (
  <Form autoComplete="off" onSubmit={onSubmit} id="user-data-form">
    <Input labelName="First name" id="firstname" event={onChange} autofocus />

    <Input labelName="Last name" id="lastname" event={onChange} />

    <Input labelName="Email" id="email" event={onChange} />

    <Label id="date-picker">
      Date
      <DatePickerStyle selected={date} onChange={onDateChange} />
    </Label>
    <SubmitButton />
  </Form>
);

export default EventForm;

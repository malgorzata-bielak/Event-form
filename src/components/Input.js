import React from "react";

const Input = ({ labelName, id, event, autofocus }) => (
  <label htmlFor={id}>
    {labelName}
    <input id={id} onChange={event} autoFocus={autofocus ? true : false} required />
  </label>
);

export default Input;

import React from "react";

const Input = ({ labelName, id, event }) => (
  <label htmlFor={id}>
    {labelName}
    <input id={id} onChange={event} />
  </label>
);

export default Input;

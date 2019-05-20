import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 0;
  color: #2273cf;
`;

export const textField = css`
  border: 1px solid #cacccd;
  height: 35px;
  margin: 5px 0 15px;
  padding-left: 8px;
  outline: none;
  font-size: 16px;
  color: #333;
`;

const InputField = styled.input`
  ${textField}
`;

const Input = ({ labelName, id, event, autofocus }) => (
  <>
    <Label htmlFor={id}>
      {labelName}
      <InputField id={id} onChange={event} autoFocus={autofocus} required />
    </Label>
  </>
);

export default Input;

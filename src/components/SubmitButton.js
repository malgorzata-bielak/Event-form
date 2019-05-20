import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  background: #2273cf;
  border: none;
  color: white;
  font-size: 16px;
  margin: 15px 0 0;
  outline: none;
  padding: 8px 12px;
  text-decoration: none;

  &:hover {
    background-color: #1e64b4;
    cursor: pointer;
  }
`;

const SubmitButton = () => (
  <>
    <Button>Submit</Button>
  </>
);

export default SubmitButton;

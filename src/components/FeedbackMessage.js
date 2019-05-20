import React from "react";
import styled from "@emotion/styled";

const ValidationError = styled.p`
  margin: 0 0 25px;
  color: #d41b56;
  font-style: italic;
`;

const Response = styled.p`
  margin: 0 0 25px;
  font-style: italic;
`;

const FeedbackMessage = ({ validationError, isSaving, databaseResponse }) => (
  <>
    <ValidationError>{validationError}</ValidationError>
    <Response>{databaseResponse}</Response>
    {isSaving && <Response>Please wait...</Response>}
  </>
);

export default FeedbackMessage;

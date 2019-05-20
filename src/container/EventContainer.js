import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import EventForm from "../components/EventForm";
import { saveUserData } from "../actions/users";
import { addUser } from "../services/service";

const Container = styled.div`
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
`;

const ValidationError = styled.p`
  margin: 0 0 25px;
  color: #d41b56;
  font-style: italic;
`;

const Response = styled.p`
  margin: 0 0 25px;
  font-style: italic;
`;

class EventContainer extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    date: new Date(),
    validationError: "",
    databaseResponse: "",
    isSaving: false
  };

  onChange = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value.trim(),
      databaseResponse: ""
    });
  };

  onDateChange = date => {
    this.setState({
      date
    });
  };

  backendResponse = databaseResponse => {
    this.setState(() => ({
      databaseResponse,
      isSaving: false
    }));
  };

  onSubmit = e => {
    const { firstname, lastname, email, date } = this.state;
    e.preventDefault();

    if (!firstname || !lastname || !email || !date) {
      this.setState(() => ({ validationError: "Please provide all the necessary information" }));
    } else if (firstname && !firstname.match(/^[a-z-\s\u00C0-\u024F\u1E00-\u1EFF]*$/i)) {
      this.setState(() => ({ validationError: "Please enter a valid first name" }));
    } else if (lastname && !lastname.match(/^[a-z-\s\u00C0-\u024F\u1E00-\u1EFF]*$/i)) {
      this.setState(() => ({ validationError: "Please enter a valid last name" }));
    } else if (email && !email.match(/^[a-z0-9]+[a-z0-9-._]*@[a-z0-9.-]+[a-z]$/i)) {
      this.setState(() => ({ validationError: "Please enter a valid email address" }));
    } else {
      this.setState(() => ({ validationError: "", isSaving: true, databaseResponse: "" }));

      const userData = {
        firstname,
        lastname,
        email: email.toLowerCase(),
        date: date.valueOf()
      };

      addUser({
        saveUserData,
        userData,
        backendResponse: this.backendResponse
      });
    }
  };

  render() {
    return (
      <Container>
        <ValidationError>{`${this.state.validationError}`}</ValidationError>
        {this.state.isSaving ? <Response>Please wait...</Response> : ""}
        {this.state.databaseResponse ? <Response>{`${this.state.databaseResponse}`}</Response> : ""}
        <EventForm
          date={this.state.date}
          onChange={this.onChange}
          onDateChange={this.onDateChange}
          onSubmit={this.onSubmit}
        />
      </Container>
    );
  }
}

export default connect(
  undefined,
  { saveUserData }
)(EventContainer);

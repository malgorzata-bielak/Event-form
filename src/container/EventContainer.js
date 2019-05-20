import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import EventForm from "../components/EventForm";
import { saveUserData } from "../actions/users";

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
      [id]: value.trim()
    });
  };

  onDateChange = date => {
    this.setState({
      date
    });
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
      this.setState(() => ({ validationError: "", isSaving: true }));

      const userData = {
        firstname,
        lastname,
        email: email.toLowerCase(),
        date: date.valueOf()
      };

      fetch("http://localhost:1234/users/user", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          return res.json();
        })
        .then(response => {
          this.setState(() => ({
            databaseResponse: "Your data has been saved successfully",
            date: new Date(),
            isSaving: false
          }));

          this.props.saveUserData(userData);
          document.getElementById("user-data-form").reset();
          setTimeout(() => {
            this.setState({ databaseResponse: "" });
          }, 4000);

          console.log("Success:", JSON.stringify(response));
        })
        .catch(error => {
          this.setState(() => ({
            databaseResponse: "Sorry, we could not save your data",
            isSaving: false
          }));

          console.error("Error:", error);
        });
    }
  };

  render() {
    return (
      <Container>
        {this.state.validationError ? (
          <ValidationError>{`${this.state.validationError}`}</ValidationError>
        ) : (
          ""
        )}

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

import React from "react";
import { connect } from "react-redux";

import EventForm from "../components/EventForm";
import FeedbackMessage from "../components/FeedbackMessage";
import FormWrapper from "../components/FormWrapper";
import { saveUserData } from "../actions/users";
import { addUser } from "../services/service";
import { isNameValid, isEmailValid } from "../validators/validator";

export class EventContainer extends React.Component {
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
    this.setState({
      databaseResponse,
      isSaving: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, email, date } = this.state;

    if (!firstname || !lastname || !email || !date) {
      return this.setState({
        validationError: "Please provide all the necessary information"
      });
    }

    if (!isNameValid(firstname)) {
      return this.setState({ validationError: "Please enter a valid first name" });
    }

    if (!isNameValid(lastname)) {
      return this.setState({ validationError: "Please enter a valid last name" });
    }

    if (!isEmailValid(email)) {
      return this.setState({ validationError: "Please enter a valid email address" });
    }

    this.setState({ validationError: "", isSaving: true, databaseResponse: "" });

    const user = {
      firstname,
      lastname,
      email: email.toLowerCase(),
      date: date.valueOf()
    };

    addUser({
      saveUserData,
      user,
      backendResponse: this.backendResponse
    });
  };

  render() {
    return (
      <FormWrapper>
        <FeedbackMessage
          validationError={this.state.validationError}
          isSaving={this.state.isSaving}
          databaseResponse={this.state.databaseResponse}
        />
        <EventForm
          date={this.state.date}
          onChange={this.onChange}
          onDateChange={this.onDateChange}
          onSubmit={this.onSubmit}
        />
      </FormWrapper>
    );
  }
}

export default connect(
  undefined,
  { saveUserData }
)(EventContainer);

import React from "react";
import { connect } from "react-redux";

import EventForm from "../components/EventForm";
import { saveUserData } from "../actions/users";

class EventContainer extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    date: new Date(),
    error: ""
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
      this.setState(() => ({ error: "Please provide all the necessary information" }));
    } else if (email && !email.match(/^[a-z0-9]+[a-z0-9-._]*@[a-z0-9.-]+[a-z]$/i)) {
      this.setState(() => ({ error: "Please enter a valid email address" }));
    } else {
      this.setState(() => ({ error: "" }));

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
          this.props.saveUserData(userData);
          console.log("Success:", JSON.stringify(response));
        })
        .catch(error => console.error("Error:", error));
    }
  };

  render() {
    return (
      <>
        {this.state.error ? <p>{`${this.state.error}`}</p> : ""}
        <EventForm
          date={this.state.date}
          onChange={this.onChange}
          onDateChange={this.onDateChange}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}

export default connect(
  undefined,
  { saveUserData }
)(EventContainer);

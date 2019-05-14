import React from "react";
import EventForm from "./EventForm";

export default class EventContainer extends React.Component {
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
    } else if (email && !email.match(/^[a-z0-9]+[a-z0-9.-_]+@[a-z0-9.-]+[a-z]$/i)) {
      this.setState(() => ({ error: "Please enter a valid email address" }));
    } else {
      this.setState(() => ({ error: "" }));
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

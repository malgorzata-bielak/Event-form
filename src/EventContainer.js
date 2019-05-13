import React from "react";
import EventForm from "./EventForm";

export default class EventContainer extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    date: new Date()
  };

  onChange = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value
    });
  };

  onDateChange = date => {
    this.setState({
      date
    });
  };

  render() {
    return (
      <>
        <EventForm
          date={this.state.date}
          onChange={this.onChange}
          onDateChange={this.onDateChange}
        />
      </>
    );
  }
}

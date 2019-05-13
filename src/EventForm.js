import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EventForm extends React.Component {
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
      <form autoComplete="off">
        <label htmlFor="firstname">
          First name
          <input id="firstname" onChange={this.onChange} />
        </label>

        <label htmlFor="lastname">
          Last name
          <input id="lastname" onChange={this.onChange} />
        </label>

        <label htmlFor="email">
          Email
          <input type="email" id="email" onChange={this.onChange} />
        </label>

        <DatePicker selected={this.state.date} onChange={this.onDateChange} />
      </form>
    );
  }
}

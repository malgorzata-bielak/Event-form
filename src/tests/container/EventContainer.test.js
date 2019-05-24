import React from "react";
import { shallow } from "enzyme";
import MockDate from "mockdate";

import { EventContainer } from "../../container/EventContainer";
import { getChildById } from "../testData/helpers";
import { users, invalidData } from "../testData/users";

beforeAll(() => {
  MockDate.set("5/23/2019");
});

afterAll(() => {
  MockDate.reset();
});

test("should render EventContainer correctly", () => {
  const wrapper = shallow(<EventContainer />);
  expect(wrapper).toMatchSnapshot();
});

test("should set firstname on input change", () => {
  const id = "firstname";
  const value = "James";
  const wrapper = shallow(<EventContainer />);

  const form = wrapper.find("EventForm");
  const label = getChildById(form, id);
  const input = getChildById(label, id);

  input.simulate("change", {
    target: { value, id }
  });
  expect(wrapper.state("firstname")).toBe(value);
  expect(wrapper.state("databaseResponse")).toBe("");
});

test("should set lastname on input change", () => {
  const id = "lastname";
  const value = "Bond";
  const wrapper = shallow(<EventContainer />);

  const form = wrapper.find("EventForm");
  const label = getChildById(form, id);
  const input = getChildById(label, id);

  input.simulate("change", {
    target: { value, id }
  });
  expect(wrapper.state("lastname")).toBe(value);
  expect(wrapper.state("databaseResponse")).toBe("");
});

test("should set email on input change", () => {
  const id = "email";
  const value = "james.bond@gmail.com";
  const wrapper = shallow(<EventContainer />);

  const form = wrapper.find("EventForm");
  const label = getChildById(form, id);
  const input = getChildById(label, id);

  input.simulate("change", {
    target: { value, id }
  });
  expect(wrapper.state("email")).toBe(value);
  expect(wrapper.state("databaseResponse")).toBe("");
});

test("should set date on input change", () => {
  const id = "date-picker";
  const value = 1558523468533;
  const wrapper = shallow(<EventContainer />);

  const form = wrapper.find("EventForm");
  const label = getChildById(form, id);

  label.find("Styled(DatePicker)").simulate("change", value);
  expect(wrapper.state("date")).toBe(value);
});

test("should change state with expected informations if valid form submission", () => {
  const wrapper = shallow(<EventContainer />);
  wrapper.setState({ ...users[0] });

  const form = wrapper.find("EventForm");
  form.simulate("submit", { preventDefault: () => {} });

  expect(wrapper.state("validationError")).toBe("");
  expect(wrapper.state("databaseResponse")).toBe("");
  expect(wrapper.state("isSaving")).toBe(true);
});

test("should render error if any form field is empty", () => {
  const wrapper = shallow(<EventContainer />);
  wrapper.setState({ ...invalidData[0] });

  const form = wrapper.find("EventForm");
  form.simulate("submit", { preventDefault: () => {} });

  expect(wrapper.state("validationError")).toBe("Please provide all the necessary information");
});

test("should render error if firstname is invalid", () => {
  const wrapper = shallow(<EventContainer />);
  wrapper.setState({ ...invalidData[1] });

  const form = wrapper.find("EventForm");
  form.simulate("submit", { preventDefault: () => {} });

  expect(wrapper.state("validationError")).toBe("Please enter a valid first name");
});

test("should render error if lastname is invalid", () => {
  const wrapper = shallow(<EventContainer />);
  wrapper.setState({ ...invalidData[2] });

  const form = wrapper.find("EventForm");
  form.simulate("submit", { preventDefault: () => {} });

  expect(wrapper.state("validationError")).toBe("Please enter a valid last name");
});

test("should render error if email is invalid", () => {
  const wrapper = shallow(<EventContainer />);
  wrapper.setState({ ...invalidData[3] });

  const form = wrapper.find("EventForm");
  form.simulate("submit", { preventDefault: () => {} });

  expect(wrapper.state("validationError")).toBe("Please enter a valid email address");
});

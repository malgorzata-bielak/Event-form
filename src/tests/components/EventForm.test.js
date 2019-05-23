import React from "react";
import { shallow } from "enzyme";

import EventForm from "../../components/EventForm";

const propsData = {
  onChange: jest.fn(),
  onDateChange: jest.fn(),
  onSubmit: jest.fn(),
  date: 1558615381720
};

test("should render EventForm correctly", () => {
  const wrapper = shallow(<EventForm {...propsData} />);
  expect(wrapper).toMatchSnapshot();
});

test("should set new date on date change", () => {
  const wrapper = shallow(<EventForm {...propsData} />);
  const date = new Date().valueOf();

  wrapper.find("Styled(DatePicker)").simulate("change", date);
  expect(propsData.onDateChange).toHaveBeenCalledWith(date);
});

test("should call onSubmit prop for valid form submission", () => {
  const wrapper = shallow(<EventForm {...propsData} />);
  const event = {
    preventDefault: () => {}
  };
  wrapper.find("#user-data-form").simulate("submit", event);
  expect(propsData.onSubmit).toHaveBeenCalledWith(event);
});

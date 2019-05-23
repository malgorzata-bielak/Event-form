import React from "react";
import { shallow } from "enzyme";

import FeedbackMessage from "../../components/FeedbackMessage";

const propsData = [
  { validationError: "", isSaving: false, databaseResponse: "" },
  {
    validationError: "Please provide all the necessary information",
    isSaving: false,
    databaseResponse: ""
  },
  { validationError: "", isSaving: true, databaseResponse: "" },
  {
    validationError: "",
    isSaving: false,
    databaseResponse: "Your data has been saved successfully"
  }
];

test("should render FeedbackMessage with default values", () => {
  const wrapper = shallow(<FeedbackMessage {...propsData[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render validation error message", () => {
  const wrapper = shallow(<FeedbackMessage {...propsData[1]} />);

  const paragraph = wrapper
    .find("Styled(p)")
    .at(0)
    .text();
  const value = "Please provide all the necessary information";
  expect(paragraph).toEqual(value);
});

test("should render saving state message", () => {
  const wrapper = shallow(<FeedbackMessage {...propsData[2]} />);

  const paragraph = wrapper
    .find("Styled(p)")
    .at(2)
    .text();
  const value = "Please wait...";
  expect(paragraph).toEqual(value);
});

test("should render database response", () => {
  const wrapper = shallow(<FeedbackMessage {...propsData[3]} />);

  const paragraph = wrapper
    .find("Styled(p)")
    .at(1)
    .text();
  const value = "Your data has been saved successfully";
  expect(paragraph).toEqual(value);
});

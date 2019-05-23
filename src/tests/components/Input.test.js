import React from "react";
import { shallow } from "enzyme";

import Input from "../../components/Input";

const propsData = [
  {
    labelName: "nameOne",
    id: "userIdOne",
    event: jest.fn()
  },
  {
    labelName: "nameTwo",
    id: "userIdTwo",
    event: jest.fn(),
    autofocus: true
  }
];

test("should render Input correctly", () => {
  const wrapper = shallow(<Input {...propsData[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("check if input have autofocus prop", () => {
  const wrapper = shallow(<Input {...propsData[1]} />);
  const input = wrapper.find(`#${propsData[1].id}`);
  expect(input.prop("autoFocus")).toBe(true);
});

test("should set value on input change", () => {
  const event = {
    target: { value: "input value" }
  };
  const wrapper = shallow(<Input {...propsData[1]} />);
  wrapper.find(`#${propsData[1].id}`).simulate("change", event);
  expect(propsData[1].event).toHaveBeenCalledWith(event);
});

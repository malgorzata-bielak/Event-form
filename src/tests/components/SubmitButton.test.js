import React from "react";
import { shallow } from "enzyme";

import SubmitButton from "../../components/SubmitButton";

test("should render SubmitButton correctly", () => {
  const wrapper = shallow(<SubmitButton />);
  expect(wrapper).toMatchSnapshot();
});

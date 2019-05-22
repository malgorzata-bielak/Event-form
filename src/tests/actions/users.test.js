import { saveUserData } from "../../actions/users";
import { users } from "../testData/users";

test("should setup save user action object with provided values", () => {
  const action = saveUserData(users[0]);
  expect(action).toEqual({
    type: "SAVE_USER_DATA",
    user: users[0]
  });
});

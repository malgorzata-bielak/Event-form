import usersReducer from "../../reducers/users";
import { users } from "../testData/users";

test("should set default state", () => {
  const state = usersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add a user", () => {
  const user = {
    firstname: "Messy",
    lastname: "Brown",
    email: "messy@brown.com",
    date: 1558524668533
  };

  const action = {
    type: "SAVE_USER_DATA",
    user
  };

  const state = usersReducer(users, action);
  expect(state).toEqual([...users, user]);
});

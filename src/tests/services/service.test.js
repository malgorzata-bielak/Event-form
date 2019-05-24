import { addUser } from "../../services/service";
import { users } from "../testData/users";

const user = users[0];
const backendResponse = jest.fn();
const saveUserData = jest.fn();

beforeEach(() => {
  fetch.resetMocks();
});

test("should call functions when resolve", done => {
  const response = "Your data has been saved successfully";
  fetch.mockResponseOnce(JSON.stringify({}));

  addUser({ saveUserData, user, backendResponse }).then(() => {
    expect(saveUserData).toHaveBeenCalledWith(user);
    expect(backendResponse).toHaveBeenCalledWith(response);

    done();
  });
});

test("should call function when reject", done => {
  const response = "Sorry, we could not save your data";
  fetch.mockRejectOnce(JSON.stringify({}));

  addUser({ saveUserData, user, backendResponse }).then(() => {
    expect(backendResponse).toHaveBeenCalledWith(response);

    done();
  });
});

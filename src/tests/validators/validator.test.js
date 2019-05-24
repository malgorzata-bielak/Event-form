import { isEmailValid, isNameValid } from "../../validators/validator";

const validEmail = ["johnny@deep.pl", "mail123@gmail.com", "my_email-add.ress@my-domain.com"];
const invalidEmail = ["email   address@gmail.com", "-email@email.com", "my@email@gmail.com"];

const validName = ["Johnny", "susan", "Jean-Dominique", "Mary Jane"];
const invalidName = ["123456", "Jo123", "M@ry"];

validEmail.forEach(email =>
  test(`${email} should be valid`, () => {
    expect(isEmailValid(email)).toBe(true);
  })
);

invalidEmail.forEach(email =>
  test(`${email} should be invalid`, () => {
    expect(isEmailValid(email)).toBe(false);
  })
);

validName.forEach(name =>
  test(`${name} should be valid`, () => {
    expect(isNameValid(name)).toBe(true);
  })
);

invalidName.forEach(name =>
  test(`${name} should be invalid`, () => {
    expect(isNameValid(name)).toBe(false);
  })
);

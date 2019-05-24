const nameRegex = /^[a-z-\s\u00C0-\u024F\u1E00-\u1EFF]*$/i;

const emailRegex = /^[a-z0-9]+[a-z0-9-._]*@[a-z0-9.-]+[a-z]$/i;

export const isNameValid = name => name && nameRegex.test(name);

export const isEmailValid = email => email && emailRegex.test(email);

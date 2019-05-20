export const isNameValid = name => name && name.match(/^[a-z-\s\u00C0-\u024F\u1E00-\u1EFF]*$/i);

export const isEmailValid = email =>
  email && email.match(/^[a-z0-9]+[a-z0-9-._]*@[a-z0-9.-]+[a-z]$/i);

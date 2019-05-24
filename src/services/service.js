export const addUser = ({ user, backendResponse, saveUserData }) =>
  fetch("http://localhost:1234/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(() => {
      saveUserData(user);
      backendResponse("Your data has been saved successfully");
    })
    .catch(() => {
      backendResponse("Sorry, we could not save your data");
    });

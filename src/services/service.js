export const addUser = ({ user, backendResponse, saveUserData }) => {
  fetch("http://localhost:1234/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(() => {
      backendResponse("Your data has been saved successfully");
      saveUserData(user);
    })
    .catch(() => {
      backendResponse("Sorry, we could not save your data");
    });
};

export const addUser = ({ userData, backendResponse, saveUserData }) => {
  fetch("http://localhost:1234/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(() => {
      backendResponse("Your data has been saved successfully");
      saveUserData(userData);
    })
    .catch(() => {
      backendResponse("Sorry, we could not save your data");
    });
};

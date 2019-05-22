const usersReducerDefaultState = [];

const usersReducer = (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return [...state, action.user];
    default:
      return state;
  }
};

export default usersReducer;

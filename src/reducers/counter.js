const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEES":
      return state + 1;
    default:
      return state;
  }
};

export default counterReducer;

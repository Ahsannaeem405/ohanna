export const addEmployees = () => {
  return (dispatch, state) => {
    // console.log("Actionsss", state);
    dispatch({
      type: "ADD_EMPLOYEES",
    });
  };
};

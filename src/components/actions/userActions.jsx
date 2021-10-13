//action to add new user
export const addUser = (newUser) => {
return {
    type: "ADD_User",
    payload: newUser,
};
};
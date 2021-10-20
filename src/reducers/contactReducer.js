const initialState = {
  users: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default contactReducer;

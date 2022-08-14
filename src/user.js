import UserService from "./user-service";

const ADD_USER = "users/ADD_USER";

const defaultValues = {
  user: null,
};

const users = (state = { ...defaultValues }, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default users;

export const resetUser = () => (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: null,
  });
};

export const addUser = (email, password) => (dispatch) => {
  return UserService.add(email, password)
    .then((response) => {
      dispatch({
        type: ADD_USER,
        payload: {
          id: response.id,
          email: email,
          passwordLength: password.length,
        },
      });
      return response;
    })
    .catch((e) => {
      throw e;
    });
};

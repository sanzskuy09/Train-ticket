const initialState = {
  isLogin: false,
  isLoading: false,
};

const ReducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default ReducerLogin;

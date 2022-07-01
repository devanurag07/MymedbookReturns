import store from "../../redux/store";

const getUserToken = () => {
  const state = store.getState();

  const token = state.auth.user.token;
};

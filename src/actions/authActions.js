import axios from 'axios';

export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: token,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://164.52.212.11/knowledge/api/auth/signin', {
      username,
      password,
    });

    const token = response.data.token;

    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => ({
  type: 'LOGOUT',
});

import axios from 'axios';

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

export const fetchData = (token) => async (dispatch) => {
  try {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts', {
     
    });
    console.log(response);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

import { GET_CARS_LIST } from "../actions/carActions";

let initialState = {
  cars: [],
  loading: false,
  error: false,
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_LIST:
      return {
        ...state,
        cars: action.payload.data,
        error: action.payload.errorMessage,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default cars;

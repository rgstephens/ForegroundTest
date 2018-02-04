import { createStore } from "redux";

// state is an array of timestamps/dates
export const timestamps = (state = [], action) => {
  switch (action.type) {
    case "TIMESTAMP":
      return [{ time: new Date(), diff: 0 } , ...state];
    case "RESET":
      return [];
    default:
      return state;
  }
};

let store = createStore(timestamps);

export default store;

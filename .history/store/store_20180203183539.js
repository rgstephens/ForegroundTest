import { createStore } from "redux";

// state is an array of timestamps/dates
export const timestamps = (state = [], action) => {
    console.log('action:', action.type);
  switch (action.type) {
    case "TIMESTAMP":
    console.log('state:', state);
      return [ new Date(), ...state ];
    case "RESET":
      return [];
    default:
      return state;
  }
};

let store = createStore(timestamps);

export default store;

import { createStore } from "redux";

// state is an array of timestamps/dates
export const timestamps = (state = [], action) => {
  switch (action.type) {
    case "TIMESTAMP":
      let ms = "";
      if (state && state[0]) {
        const diff = new Date() - state[0].time;
        ms = new Date(diff).toISOString().slice(14, -1);
      }
      return [{ time: new Date(), diff: ms }, ...state];
    case "RESET":
      return [];
    default:
      return state;
  }
};

let store = createStore(timestamps);

export default store;

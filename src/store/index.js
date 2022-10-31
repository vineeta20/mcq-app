import { configureStore } from "@reduxjs/toolkit";
import selectedOptionReducer from "./selectedOption";

const store = configureStore({
  reducer: {
    selectedOption: selectedOptionReducer,
  },
});
export default store;

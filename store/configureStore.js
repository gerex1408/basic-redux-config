import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks";
import emplyeeReducer from "./employees";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: emplyeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import collegeReducer from "./slices/collegeSlice";
import currentCollegeReducer from "./slices/currentCollegeSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      college: collegeReducer,
      currentCollege: currentCollegeReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

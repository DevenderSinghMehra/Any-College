import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { College } from "./collegeSlice";

type CurrentCollegeState = {
  college: College | null;
};

const initialState: CurrentCollegeState = {
  college: null,
};

const currentCollegeSlice = createSlice({
  name: "currentCollege",
  initialState,
  reducers: {
    setCurrentCollege: (state, action: PayloadAction<College>) => {
      state.college = action.payload;
    },

    clearCurrentCollege: (state) => {
      state.college = null;
    },
  },
});

export const { setCurrentCollege, clearCurrentCollege } =
  currentCollegeSlice.actions;

export default currentCollegeSlice.reducer;

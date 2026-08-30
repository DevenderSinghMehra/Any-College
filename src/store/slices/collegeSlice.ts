import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type College = {
  name: string;
  city: string;
  state: string;
  type: string;
  fees_ug_inr: number;
  placement_avg_lpa: number;
  rating: number;
  nirf_rank: number;
};

type CollegeState = {
  colleges: College[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CollegeState = {
  colleges: [],
  isLoading: false,
  error: null,
};

export const fetchColleges = createAsyncThunk<College[]>(
  "college/fetchColleges",
  async () => {
    const response = await fetch("/data/colleges.json");

    if (!response.ok) {
      throw new Error("Unable to load colleges.");
    }

    const data: College[] = await response.json();
    return data.map((obj) => {
      const name = obj.name.toLowerCase();
      const city = obj.city.toLowerCase();
      const state = obj.state.toLowerCase();
      return { ...obj, name, city, state };
    });
  },
);

const collegeSlice = createSlice({
  name: "college",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColleges.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchColleges.fulfilled, (state, action) => {
        state.colleges = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchColleges.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Unable to load colleges.";
      });
  },
});

export default collegeSlice.reducer;

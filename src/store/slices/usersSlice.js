import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    usersData: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
});

export const usersReducer = usersSlice.reducer;

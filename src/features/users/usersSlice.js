import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Kaduna Nzeogwu" },
  { id: "1", name: "Victor Banjo" },
  { id: "2", name: "Emmanuel Ifeajuna" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;

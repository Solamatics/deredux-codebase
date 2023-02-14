import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning Redux toolkit", content: "I've heard good things" },
  {
    id: 2,
    title: "Toolkit slice...",
    content: "Griding the skills to become the best",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAll = (state) => state.posts;

export const { postsAdded } = postsSlice.actions;

export default postsSlice.reducer;

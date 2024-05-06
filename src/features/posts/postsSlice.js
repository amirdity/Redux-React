import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "learning redux toolkit",
    content: "Ive heatd good things.",
  },
  {
    id: "2",
    title: "slice...",
    content: "the more i say slice, the more i want pizza.",
  },
];
const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
export const selectAllPosts = (state)=> state.posts
export default postsSlice.raducer;

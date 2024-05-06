import { configureStore } from "@reduxjs/toolkit";
import postsReduser from "../features/posts/postsSlice";
import counterReducer from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    posts: postsReduser,
    // counter: counterReducer,
  },
});

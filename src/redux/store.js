import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/features/user/usersSlice"; // Import the default exported reducer

export const store = configureStore({
  reducer: {
    usersR: usersReducer, // Use the reducer here
  },
});

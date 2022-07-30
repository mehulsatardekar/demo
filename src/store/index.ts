import { configureStore } from "@reduxjs/toolkit";

import { profileSlice, authSlice, userSlice, postSlice } from "./slices";
const store = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    user: userSlice.reducer,
    post: postSlice.reducer,
    profile: profileSlice.reducer,
  },
});

const authActions = authSlice.actions;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export { store, authActions };

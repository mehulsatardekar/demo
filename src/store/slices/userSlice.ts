import {
  createSlice,
  createAsyncThunk,
  Dispatch,
  ThunkDispatch,
  AnyAction,
} from "@reduxjs/toolkit";

import {
  getAllUsers,
  followUser,
  unfollowUser,
  searchUsers,
} from "../../services";

import { useToast } from "../../hooks";
import { userDetailsType, followType } from "../types";
import { edituserProfile } from "./authSlice";
const { notifySuccess, notifyError } = useToast();

const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const response = await getAllUsers();
    return response.data.users;
  } catch (error) {
    notifyError("Error occurerd ");
  }
});

const follow = createAsyncThunk(
  "users/follow",
  async ({ userid, userToken, dispatch }: followType, thunkAPI) => {
    try {
      const response = await followUser(userid, userToken);
      dispatch(edituserProfile({ userdetails: response.data.user, userToken }));
      return response.data;
    } catch (error) {
      console.log(error);
      notifyError("Your already following");
      return thunkAPI.rejectWithValue("Your already following");
    }
  }
);

const initialState: userDetailsType = {
  users: [],
  isUsersLoading: false,
  isFollowing: false,
  isSearchingForUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isUsersLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      //console.log(action.payload);
      state.isUsersLoading = false;
      state.users = action.payload;
    });

    builder.addCase(getUsers.rejected, (state) => {
      state.isUsersLoading = false;
    });

    /*following  */
    builder.addCase(follow.pending, (state) => {
      state.isFollowing = true;
    });

    builder.addCase(follow.fulfilled, (state, action) => {
      state.users = [...state.users].map((currUser) =>
        currUser._id === action.payload.followUser._id
          ? action.payload.followUser
          : currUser
      );
      state.isFollowing = false;
      //state.users = state.users.map(user=>)
    });

    builder.addCase(follow.rejected, (state) => {
      state.isFollowing = false;
    });
  },
});

const userAction = userSlice.actions;
export { getUsers, follow, userAction, userSlice };

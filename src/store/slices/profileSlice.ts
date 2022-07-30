import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useToast } from "../../hooks";
import { getUser, getAllPostOfUser } from "../../services/";
import {
  profileSliceInitialStateType,
  loadUserPostsType,
  userProfileDetailsType,
} from "../types";

const { notifySuccess, notifyError } = useToast();

const userProfileDetails = createAsyncThunk(
  "/profile/userProfileDetails",
  async ({ username }: userProfileDetailsType, thunkAPI) => {
    try {
      const response = await getUser(username);
      return response.data.user;
    } catch (error) {
      notifyError("Failed loading user Profile details");
      return thunkAPI.rejectWithValue("Failed loading user Profile details");
    }
  }
);

const loadUserPosts = createAsyncThunk(
  "/profile/loadUserPosts",
  async ({ username }: loadUserPostsType, thunkAPI) => {
    try {
      const response = await getAllPostOfUser(username);
      return response.data.posts;
    } catch (error) {
      notifyError("Failed loading user posts");
      return thunkAPI.rejectWithValue("failed loading User Posts");
    }
  }
);

const profileSliceInitialState: profileSliceInitialStateType = {
  profileDetails: {
    _id: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    bio: ""!,
    bookmarks: [],
    avatarUrl: "",
    website: ""!,
    createdAt: "",
    updatedAt: "",
    followers: [],
    following: [],
  },
  postsDetails: [],
  isUserLoading: false,
  isUsersPostLoading: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: profileSliceInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userProfileDetails.pending, (state) => {
      state.isUserLoading = true;
    });

    builder.addCase(userProfileDetails.fulfilled, (state, action) => {
      state.isUserLoading = false;
      state.profileDetails = action.payload;
    });

    builder.addCase(userProfileDetails.rejected, (state) => {
      state.isUserLoading = false;
    });

    builder.addCase(loadUserPosts.pending, (state) => {
      state.isUsersPostLoading = true;
    });

    builder.addCase(loadUserPosts.fulfilled, (state, action) => {
      state.isUsersPostLoading = false;
      state.postsDetails = action.payload;
    });

    builder.addCase(loadUserPosts.rejected, (state) => {
      state.isUsersPostLoading = false;
    });
  },
});

const profileAction = profileSlice.actions;

export { userProfileDetails, loadUserPosts, profileAction, profileSlice };

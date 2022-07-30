import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginService,
  signupService,
  editProfile,
  addPostToBookmark,
  removePostFromBookmark,
} from "../../services/";

import { useToast } from "../../hooks";

import {
  authIntialStateType,
  loginPropsTypes,
  signupPropsTypes,
  edituserProfileType,
  removeFromBookmarkType,
  addToBookmarkType,
} from "../types";

const authIntialState: authIntialStateType = {
  userToken: localStorage.getItem("auth.storage.userToken")! ?? "",
  userDetails: JSON.parse(localStorage.getItem("auth.userdetails")!) ?? {},
  isLoading: false,
  isPostAddingToBookmark: false,
  isPostDeletingFromBookmark: false,
};

const { notifySuccess, notifyError } = useToast();

const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: loginPropsTypes, thunkAPI) => {
    try {
      const response = await loginService(username, password);

      notifySuccess("You have Login SuccessFully");
      return response.data;
    } catch (error) {
      notifyError("Incorrect user credentials try again");
      return thunkAPI.rejectWithValue("username and password is incorrect");
    }
  }
);

const signup = createAsyncThunk(
  "auth/signup",
  async (
    { firstname, username, password, lastname }: signupPropsTypes,
    thunkAPI
  ) => {
    try {
      const response = await signupService(
        firstname,
        username,
        lastname,
        password
      );

      notifySuccess("Signup successufully");
      return response.data;
    } catch (error: any) {
      if (error.response.status === 422) {
        notifyError("user already exists with this account!");
      }
      return thunkAPI.rejectWithValue("oops");
    }
  }
);

const edituserProfile = createAsyncThunk(
  "users/edituserProfile",
  async ({ userdetails, userToken }: edituserProfileType, thunkAPI) => {
    try {
      const response = await editProfile(userdetails, userToken!);
      return response.data.user;
    } catch (error) {
      notifyError("error in editing");
      return thunkAPI.rejectWithValue("Error in Editing");
    }
  }
);

const addToBookmark = createAsyncThunk(
  "/posts/addToBookmark",
  async ({ postid, userToken }: addToBookmarkType, thunkAPI) => {
    try {
      const resp = await addPostToBookmark(postid, userToken!);
      return resp.data.bookmarks;
    } catch (error) {
      notifyError("couldnt add post to bookmark");
      return thunkAPI.rejectWithValue;
    }
  }
);

const removeFromBookmark = createAsyncThunk(
  "/posts/removeFromBookmark",
  async ({ postid, userToken }: removeFromBookmarkType, thunkAPI) => {
    try {
      const resp = await removePostFromBookmark(postid, userToken!);
      return resp.data.bookmarks;
    } catch (error) {
      notifyError("couldnt add post to bookmark");
      return thunkAPI.rejectWithValue;
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: authIntialState,
  reducers: {
    logoutuser: (state: authIntialStateType) => {
      localStorage.removeItem("auth.storage.userToken");
      localStorage.removeItem("auth.userdetails");
      state.userDetails = null;
      state.userToken = null;
      notifySuccess("You have Logout SuccessFully");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const userinformation = action.payload.foundUser;
      delete userinformation.password;
      state.isLoading = false;
      state.userToken = action.payload.encodedToken;
      state.userDetails = userinformation;
      localStorage.setItem("auth.storage.userToken", state.userToken!);
      localStorage.setItem(
        "auth.userdetails",
        JSON.stringify(state.userDetails)
      );
    });

    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });

    /*signup  part */

    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      //console.log("yoo", action.payload);
      const { encodedToken, createdUser } = action.payload;
      delete createdUser.password;
      (state.isLoading = false),
        (state.userToken = encodedToken),
        (state.userDetails = createdUser),
        localStorage.setItem("auth.storage.userToken", state.userToken!),
        localStorage.setItem(
          "auth.userdetails",
          JSON.stringify(state.userDetails!)
        );
    });

    builder.addCase(signup.rejected, (state) => {
      state.isLoading = false;
    });

    /* Edit profile  */

    builder.addCase(edituserProfile.pending, (state) => {});

    builder.addCase(edituserProfile.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });

    builder.addCase(edituserProfile.rejected, (state, action) => {
      //state.userDetails = action.payload;
    });

    /* Add Bookmark section */

    builder.addCase(addToBookmark.pending, (state) => {
      state.isPostAddingToBookmark = true;
    });

    builder.addCase(addToBookmark.fulfilled, (state, action) => {
      state.isPostAddingToBookmark = false;
      state.userDetails!.bookmarks = action.payload;
    });

    builder.addCase(addToBookmark.rejected, (state) => {
      state.isPostAddingToBookmark = false;
    });

    /* Remove Bookmark section */
    builder.addCase(removeFromBookmark.pending, (state) => {
      state.isPostDeletingFromBookmark = true;
    });

    builder.addCase(removeFromBookmark.fulfilled, (state, action) => {
      state.isPostDeletingFromBookmark = false;
      state.userDetails!.bookmarks = action.payload;
    });

    builder.addCase(removeFromBookmark.rejected, (state) => {
      state.isPostDeletingFromBookmark = false;
    });
  },
});

const authActions = authSlice.actions;
export {
  login,
  signup,
  edituserProfile,
  addToBookmark,
  removeFromBookmark,
  authSlice,
  authActions,
};

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { string } from "yup";
import { useToast } from "../../hooks";
import {
  getAllPosts,
  addPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
  addCommentOnPost,
  editCommentOnPost,
  deleteCommentOnPost,
} from "../../services";

import {
  deleteCommentProps,
  addCommentType,
  postIntialStateType,
  editCommentType,
  deleteUserPostType,
  postLikeType,
  DislikeType,
  postType,
  addUserPostType,
  editUserPostType,
} from "../types";

const { notifyError, notifySuccess } = useToast();

const getPosts = createAsyncThunk("/posts/getAllPosts", async (_, thunkAPI) => {
  try {
    const response = await getAllPosts();
    return response.data.posts;
  } catch (error) {
    thunkAPI.rejectWithValue("erro");
  }
});

const addComment = createAsyncThunk(
  "/posts/addComment",
  async ({ postid, commentData, userToken }: addCommentType, thunkAPI) => {
    try {
      const response = await addCommentOnPost(postid, commentData, userToken);
      return response.data.posts;
    } catch (error) {
      notifyError(`Can't add comment`);
      return thunkAPI.rejectWithValue("some error occured ");
    }
  }
);

const editComment = createAsyncThunk(
  "/posts/editComment",
  async (
    { postid, commentid, commentData, userToken }: editCommentType,
    thunkAPI
  ) => {
    try {
      const response = await editCommentOnPost(
        postid,
        commentid,
        commentData,
        userToken
      );
      return response.data.posts;
    } catch (error) {
      notifyError("error occurred while editing comment");
      return thunkAPI.rejectWithValue("error occurred");
    }
  }
);

const deleteComment = createAsyncThunk(
  "/posts/deleteComment",
  async ({ postid, commentid, userToken }: deleteCommentProps, thunkAPI) => {
    try {
      const response = await deleteCommentOnPost(postid!, commentid, userToken);
      return response.data.posts;
    } catch (error) {
      notifyError(`Can't delete comment`);
      return thunkAPI.rejectWithValue("error occurred");
    }
  }
);

const deleteUserPost = createAsyncThunk(
  "/posts/deleteUserPost",
  async ({ postid, userToken }: deleteUserPostType, thunkAPI) => {
    try {
      const response = await deletePost(postid, userToken!);
      notifySuccess(`Post successfully deleted`);
      return response.data.posts;
    } catch (error) {
      notifyError("can't delete Post");
      return thunkAPI.rejectWithValue("Cant delete post");
    }
  }
);

const postLike = createAsyncThunk(
  "/posts/postLike",
  async ({ postid, userToken }: postLikeType, thunkAPI) => {
    try {
      const response = await likePost(postid, userToken!);
      return response.data.posts;
    } catch (error) {
      notifyError("Can't Like post");
      return thunkAPI.rejectWithValue("Cant Like Post");
    }
  }
);

const postDislike = createAsyncThunk(
  "/posts/postDisLike",
  async ({ postid, userToken }: DislikeType, thunkAPI) => {
    try {
      const response = await dislikePost(postid, userToken!);
      return response.data.posts;
    } catch (error) {
      notifyError("Cant dislike Post");
      return thunkAPI.rejectWithValue("Can't Dislike post");
    }
  }
);

const addUserPost = createAsyncThunk(
  "/posts/addUserPost",
  async ({ postData, userToken }: addUserPostType, thunkAPI) => {
    try {
      const response = await addPost(postData, userToken!);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cant add User Post");
    }
  }
);

const editUserPost = createAsyncThunk(
  "/posts/editUserPost",
  async ({ postData, userToken }: editUserPostType, thunkAPI) => {
    try {
      const response = await editPost(postData, userToken!);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cant edit User Post");
    }
  }
);
const initialState: postIntialStateType = {
  posts: [],
  userPosts: [],
  isPostLoading: false,
  isUserPostLoading: false,
  sortPostBy: "LATEST",
  isAddingComment: false,
  isDeletingComment: false,
  isEditingComment: false,
  isPostDeleting: false,
  isUserPostLiking: false,
  isUserPostDisliking: false,
  isUserAddingPost: false,
  isUserEditingPost: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    sortby: (state, action) => {
      state.sortPostBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isPostLoading = true;
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isPostLoading = false;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.isPostLoading = false;
    });

    /*comment section addcomment*/

    builder.addCase(addComment.pending, (state) => {
      state.isAddingComment = true;
    });

    builder.addCase(addComment.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isAddingComment = false;
    });

    builder.addCase(addComment.rejected, (state) => {
      state.isAddingComment = false;
    });

    /*comment section deletecomment*/

    builder.addCase(deleteComment.pending, (state) => {
      state.isDeletingComment = true;
    });

    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isDeletingComment = false;
    });

    builder.addCase(deleteComment.rejected, (state) => {
      state.isDeletingComment = false;
    });

    /*comment section editcomment*/
    builder.addCase(editComment.pending, (state) => {
      state.isEditingComment = true;
    });

    builder.addCase(editComment.fulfilled, (state, action) => {
      state.isEditingComment = false;
      state.posts = action.payload;
    });

    builder.addCase(editComment.rejected, (state) => {
      state.isEditingComment = false;
    });

    /*delete post section */

    builder.addCase(deleteUserPost.pending, (state) => {
      state.isPostDeleting = true;
    });

    builder.addCase(deleteUserPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isPostDeleting = false;
    });

    builder.addCase(deleteUserPost.rejected, (state, action) => {
      state.isPostDeleting = false;
    });

    /* Post like section */
    builder.addCase(postLike.pending, (state) => {
      state.isUserPostLiking = true;
    });

    builder.addCase(postLike.fulfilled, (state, action) => {
      state.isUserPostLiking = false;
      state.posts = action.payload;
    });

    builder.addCase(postLike.rejected, (state) => {
      state.isUserPostLiking = false;
    });

    /*Post Dislike Section */
    builder.addCase(postDislike.pending, (state) => {
      state.isUserPostDisliking = true;
    });

    builder.addCase(postDislike.fulfilled, (state, action) => {
      state.isUserPostDisliking = false;
      state.posts = action.payload;
    });

    builder.addCase(postDislike.rejected, (state) => {
      state.isUserPostDisliking = false;
    });

    /* Add post Section */
    builder.addCase(addUserPost.pending, (state) => {
      state.isUserAddingPost = true;
    });

    builder.addCase(addUserPost.fulfilled, (state, action) => {
      state.isUserAddingPost = false;
      state.posts = action.payload;
    });

    builder.addCase(addUserPost.rejected, (state) => {
      state.isUserAddingPost = false;
    });

    /*Edit Post section */

    builder.addCase(editUserPost.pending, (state) => {
      state.isUserEditingPost = false;
    });

    builder.addCase(editUserPost.fulfilled, (state, action) => {
      state.isUserEditingPost = false;
      state.posts = action.payload;
    });

    builder.addCase(editUserPost.rejected, (state) => {
      state.isUserEditingPost = false;
    });
  },
});

const postAction = postSlice.actions;

export {
  getPosts,
  deleteComment,
  addComment,
  addUserPost,
  editUserPost,
  postLike,
  postDislike,
  deleteUserPost,
  editComment,
  postAction,
  postSlice,
};

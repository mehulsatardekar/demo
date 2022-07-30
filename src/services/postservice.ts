import axios from "axios";
import { addPostdataType , postType } from "../store/types";
const getAllPosts = () => axios.get("/api/posts");

const getAllPostOfUser = (username: string) =>
  axios.get(`/api/posts/user/${username}`);

const addPost = (postData: addPostdataType, authorization: string) =>
  axios.post("/api/posts", { postData }, { headers: { authorization } });

const editPost = (postData: postType, authorization: string) => {
  return axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    { headers: { authorization } }
  );
};

const deletePost = (postid: string, authorization: string) =>
  axios.delete(`/api/posts/${postid}`, { headers: { authorization } });

const likePost = (postid: string, authorization: string) =>
  axios.post(`/api/posts/like/${postid}`, {}, { headers: { authorization } });

const dislikePost = (postid: string, authorization: string) => {
  return axios.post(
    `/api/posts/dislike/${postid}`,
    {},
    {
      headers: { authorization },
    }
  );
};

const addCommentOnPost = (
  postid: string,
  commentData: string,
  authorization: string
) =>
  axios.post(
    `/api/comments/add/${postid}`,
    { commentData },
    { headers: { authorization } }
  );

const editCommentOnPost = (
  postid: string,
  commentid: string,
  commentData: string,
  authorization: string
) =>
  axios.post(
    `/api/comments/edit/${postid}/${commentid}`,
    { commentData },
    { headers: { authorization } }
  );

const deleteCommentOnPost = (
  postid: string,
  commentid: string,
  authorization: string
) =>
  axios.delete(`/api/comments/delete/${postid}/${commentid}`, {
    headers: { authorization },
  });

const addPostToBookmark = (postid: string, authorization: string) =>
  axios.post(
    `/api/users/bookmark/${postid}`,
    {},
    { headers: { authorization } }
  );

const removePostFromBookmark = (postid: string, authorization: string) =>
  axios.post(
    `/api/users/remove-bookmark/${postid}`,
    {},
    { headers: { authorization } }
  );

export {
  getAllPosts,
  getAllPostOfUser,
  addPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
  addCommentOnPost,
  editCommentOnPost,
  deleteCommentOnPost,
  addPostToBookmark,
  removePostFromBookmark,
};

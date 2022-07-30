import axios from "axios";

const getAllUsers = () => axios.get("/api/users");

const getUser = (user: string) => axios.get(`/api/users/${user}`);

const editProfile = (userData: any, authorization: string) =>
  axios.post(`/api/users/edit`, { userData }, { headers: { authorization } });

const followUser = (userid: string, authorization: string) =>
  axios.post(`/api/users/follow/${userid}`, {}, { headers: { authorization } });

const unfollowUser = (userid: string, authorization: string) =>
  axios.post(
    `/api/users/unfollow/${userid}`,
    {},
    {
      headers: { authorization },
    }
  );

const searchUsers = (searchQuery: string) =>
  axios.get(`/api/users/search/${searchQuery}`);

export {
  getAllUsers,
  getUser,
  followUser,
  unfollowUser,
  editProfile,
  searchUsers,
};

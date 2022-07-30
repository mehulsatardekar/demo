import { usersType, postType } from "../../store/types";

type profileSliceInitialStateType = {
  profileDetails: usersType;
  postsDetails: postType[];
  isUserLoading: boolean;
  isUsersPostLoading: boolean;
};

type loadUserPostsType = {
  username: string;
};

type userProfileDetailsType = {
  username: string;
};

export type {
  profileSliceInitialStateType,
  loadUserPostsType,
  userProfileDetailsType,
};

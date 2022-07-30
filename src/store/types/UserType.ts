import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { authIntialStateType, usersType } from "./index";

type userDetailsType = {
  users: usersType[];
  isUsersLoading: boolean;
  isFollowing: boolean;
  isSearchingForUser: boolean;
};

type followType = {
  userid: string;
  userToken: string;
  dispatch: ThunkDispatch<
    {
      authentication: authIntialStateType;
      user: userDetailsType;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>;
};
export type { userDetailsType, followType };

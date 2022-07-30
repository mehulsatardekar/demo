import { userTypeFollowerAndFollowing } from "../../../store/types";
type usersType = {
  userdetails: {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    bio: string | null;
    bookmarks: [];
    avatarUrl: string;
    website: string | null;
    createdAt: string;
    updatedAt: string;
    followers: userTypeFollowerAndFollowing[];
    following: userTypeFollowerAndFollowing[];
  } | null;
};

export type { usersType };

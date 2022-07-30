type userTypeFollowerAndFollowing = {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  bio: string | null;
  bookmarks: string[];
  avatarUrl: string;
  website: string | null;
  createdAt: string;
  updatedAt: string;
  followers: [];
  following: [];
};
type usersType = {
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
};

type authIntialStateType = {
  userToken: string | null;
  userDetails: usersType | null;
  isLoading: boolean;
  isPostAddingToBookmark: boolean;
  isPostDeletingFromBookmark: boolean;
};

type loginPropsTypes = {
  password: string;
  username: string;
};

type signupPropsTypes = {
  firstname: string;
  username: string;
  password: string;
  lastname: string;
  bio: string;
  biolink: string;
  backgroundImgUrl: string;
  profilePicUrl: string;
};

type ErrorType = {
  error: {
    status: { response: object };
  };
};

type edituserProfileType = {
  userToken: string | null;
  userdetails: {
    avatarUrl: string;
    website: string;
    bio: string;
  };
};

type currentUserType = {
  access_token: string;
  user: {
    id: string;
    aud: string;
    role: string;
    email: string;
  };
};

type AuthType = {
  currentUser: currentUserType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<currentUserType | null>>;
};

type authProviderContextProps = {
  children: React.ReactNode;
};

export type {
  userTypeFollowerAndFollowing,
  usersType,
  authIntialStateType,
  loginPropsTypes,
  signupPropsTypes,
  ErrorType,
  edituserProfileType,
  AuthType,
  authProviderContextProps,
  currentUserType,
};

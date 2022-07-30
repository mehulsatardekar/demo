type likedBytype = {
  _id: string;
  content: string;
  mediaURL: string;
  destination: string;
  likes: {
    likeCount: number;
    likedBy: [];
    dislikedBy: [];
  };
  comments: [
    {
      _id: string;
      username: string;
      text: string;
      votes: {
        upvotedBy: [];
        downvotedBy: [];
      };
    }
  ];
  username: string;
  createdAt: string;
  updatedAt: string;
};
type postType = {
  _id: string;
  content: string;
  mediaURL: string;
  destination: string;
  likes: {
    likeCount: number;
    likedBy: likedBytype[];
    dislikedBy: likedBytype[];
  };
  comments: [
    {
      _id: string;
      username: string;
      text: string;
      votes: {
        upvotedBy: [];
        downvotedBy: [];
      };
    }
  ];
  username: string;
  createdAt: string;
  updatedAt: string;
};

type deleteCommentProps = {
  postid: string | undefined;
  commentid: string;
  userToken: string;
};

type addCommentType = {
  postid: string;
  commentData: string;
  userToken: string;
};

type editCommentType = {
  postid: string;
  commentid: string;
  commentData: string;
  userToken: string;
};

type postIntialStateType = {
  posts: postType[];
  userPosts: [];
  isPostLoading: boolean;
  isUserPostLoading: boolean;
  sortPostBy: string;
  isAddingComment: boolean;
  isDeletingComment: boolean;
  isEditingComment: boolean;
  isPostDeleting: boolean;
  isUserPostLiking: boolean;
  isUserPostDisliking: boolean;
  isUserAddingPost: boolean;
  isUserEditingPost: boolean;
};

type deleteUserPostType = {
  postid: string;
  userToken: string | null;
};

type postLikeType = {
  postid: string;
  userToken: string | null;
};

type DislikeType = {
  postid: string;
  userToken: string | null;
};

type removeFromBookmarkType = {
  postid: string;
  userToken: string | null;
};

type addToBookmarkType = {
  postid: string;
  userToken: string | null;
};

type addPostdataType = {
  content: string;
  mediaURL: string;
  destination: string;
};
type addUserPostType = {
  postData: addPostdataType;
  userToken: string | null;
};

type editUserPostType = {
  postData: postType;
  userToken: string | null;
};
export type {
  postType,
  deleteCommentProps,
  addCommentType,
  postIntialStateType,
  editCommentType,
  deleteUserPostType,
  postLikeType,
  DislikeType,
  removeFromBookmarkType,
  addToBookmarkType,
  addUserPostType,
  editUserPostType,
  addPostdataType,
};

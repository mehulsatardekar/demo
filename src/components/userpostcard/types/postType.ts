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

export type { postType };

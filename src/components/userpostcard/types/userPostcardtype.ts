import { postType } from "../../../store/types";

type userPostCardProps = {
  postdetails: postType;
  likePost?: () => void;
  isPostAlreadyLiked?: () => boolean;
  bookmarkPost?: () => void;
  isPostAlreadyBookmarked?: () => boolean;
  postid?: string;
};
export type { userPostCardProps };

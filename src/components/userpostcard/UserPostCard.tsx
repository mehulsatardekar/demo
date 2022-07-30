import React, { useEffect, useState } from "react";
import { Box, Divider } from "@chakra-ui/react";

import { PostCardTitle } from "./PostCardTitle";
import { PostCardImage } from "./PostCardImage";
import { PostCardLikeSaveComment } from "./PostCardLikeSaveComment";
import { PostCardUserComments } from "./PostCardUserComments";
import { PostAddComment } from "./PostAddComment";

import { useDarkModeTheme } from "../../contexts";
import { AppDispatch, RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";

import { usersType } from "../../store/types";
import { userPostCardProps } from "./types";

import {
  postDislike, postLike, addToBookmark,
  removeFromBookmark
} from '../../store/slices'
import { useToast } from "../../hooks";

const UserPostCard = ({ postdetails, postid }: userPostCardProps) => {

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const { notifyError, notifySuccess } = useToast();

  const dispatch = useDispatch<AppDispatch>();

  const { users } = useSelector((state) => (state as RootState).user);

  const { userDetails, userToken } = useSelector(
    (state) => (state as RootState).authentication
  );

  const [currentusersDetails, setCurrentUserDetails] = useState<usersType>();

  useEffect(() => {
    if (users.length > 0)
      setCurrentUserDetails(
        users.filter((user) => user.username === postdetails.username)[0]
      );
  }, [users, postdetails.username]);


  const isPostAlreadyLiked = () => postdetails.likes.likedBy.filter((user) => user._id === userDetails?._id).length !== 0;

  const isPostAlreadyBookmarked = () => userDetails!.bookmarks.filter((postId) => postId === postdetails._id).length !== 0;

  const likePost = () => {
    if (isPostAlreadyLiked()) {
      dispatch(postDislike({ postid: postdetails._id, userToken }));
    } else {
      dispatch(postLike({ postid: postdetails._id, userToken }));
    }
  }

  const bookmarkPost = () => {
    if (isPostAlreadyBookmarked()) {
      dispatch(removeFromBookmark({ postid: postdetails._id, userToken }));
      notifySuccess("Post removed from bookmark");
    } else {
      dispatch(addToBookmark({ postid: postdetails._id, userToken }));
      notifySuccess("Post saved to bookemark");
    }
  }

  return (
    <>
      {
        currentusersDetails && postdetails && (
          <Box bg={cardBg} borderRadius="10px" boxShadow="base" key={postid}>
            <PostCardTitle
              postimage={
                currentusersDetails?.username === userDetails?.username
                  ? userDetails?.avatarUrl
                  : currentusersDetails?.avatarUrl
              }
              postusername={
                currentusersDetails?.firstName + "" + currentusersDetails?.lastName
              }
              postdestination={postdetails.destination}
            />
            {
              postdetails.mediaURL &&
              <PostCardImage
                postsource={postdetails?.mediaURL}
                postusername={
                  currentusersDetails?.firstName + "" + currentusersDetails?.lastName
                }
              />
            }

            <PostCardLikeSaveComment postdetails={postdetails} likePost={likePost} isPostAlreadyLiked={isPostAlreadyLiked} bookmarkPost={bookmarkPost} isPostAlreadyBookmarked={isPostAlreadyBookmarked} />
            <PostCardUserComments
              likeCount={postdetails.likes.likeCount}
              commentCount={postdetails.comments.length}
              username={postdetails.username}
              postdescription={postdetails.content}
              posttimestamp={postdetails.createdAt}
            />
            <Divider />
            <PostAddComment postid={postdetails._id} />
          </Box>
        )
      }
    </>
  );
};
export { UserPostCard };

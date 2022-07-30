import React, { useEffect, useState } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import InputEmoji from "react-input-emoji";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { addComment } from "../../store/slices";
import {
  flexStyleProps,
  inputContainerStyleProps,
  postButtonStyleProps,
} from "./styles/postAddCommentStyleProps";
import { useToast } from "../../hooks";
import { Toaster } from "react-hot-toast";

type postAddCommentType = {
  postid: string;
}
const PostAddComment = ({ postid }: postAddCommentType) => {
  const dispatch = useDispatch<AppDispatch>();

  const { userToken } = useSelector(
    (state) => (state as RootState).authentication
  );

  const { notifyError, notifySuccess } = useToast();

  const [comment, setComment] = useState<string>();

  function addCommentOnPost(comment: string | undefined) {

    if (comment !== "") {
      setComment(comment);
      dispatch(addComment({ postid, commentData: comment!, userToken: userToken! }));
      notifySuccess("Comment Added");
      setComment("");
    } else {
      notifyError("Enter some text to comment");
    }

  }


  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <Flex {...flexStyleProps}>
        <Box aria-label="Add comment" {...inputContainerStyleProps}>
          <InputEmoji
            value={comment}
            onChange={setComment}
            cleanOnEnter
            onEnter={addCommentOnPost}
            fontFamily="Inter"
            aria-label="Add comment"
          />
        </Box>

        <Box>
          <Button aria-label="post comment" {...postButtonStyleProps} onClick={() => addCommentOnPost(comment)}>
            Post
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export { PostAddComment };

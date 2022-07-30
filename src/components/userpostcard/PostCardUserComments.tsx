import React, { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

import { useDarkModeTheme } from "../../contexts";

import {
  flexContainerStyleProps,
  likesStyleProps,
  likeTextStyleProps,
  commentContainerStyleProps,
  commentStyleProps,
  boxStyleProps,
  textStyleProps,
} from "./styles/postCardUserComments-style-props";

type postCardUserCommentsProps = {
  likeCount: number;
  commentCount: number;
  username: string;
  postdescription: string;
  posttimestamp: string;
};
const PostCardUserComments = ({
  likeCount,
  commentCount,
  username,
  postdescription,
  posttimestamp,
}: postCardUserCommentsProps) => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  return (
    <Flex {...flexContainerStyleProps}>
      {likeCount > 0 && (
        <Box display="flex" gap={1}>
          <Text color={cardText} {...likesStyleProps}>
            {likeCount}
          </Text>
          <Text color={cardLightText} {...likeTextStyleProps}>
            Likes
          </Text>
        </Box>
      )}

      <Box {...commentContainerStyleProps}>
        <Text color={cardText} {...likeTextStyleProps}>
          {username}
        </Text>
        <Text color={cardText} {...commentStyleProps}>
          {postdescription}
        </Text>
      </Box>

      {commentCount > 0 && (
        <Box {...boxStyleProps}>
          <Text color={cardLightText} {...textStyleProps}>
            View All {commentCount} Comments
          </Text>
        </Box>
      )}

      <Box {...boxStyleProps}>
        <Text color={cardLightText} {...textStyleProps}>
          {`${new Date(posttimestamp).toDateString().split(" ").slice(1,4).join(" ")}`}
        </Text>
      </Box>
    </Flex>
  );
};

export { PostCardUserComments };

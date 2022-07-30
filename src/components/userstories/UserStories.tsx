import React, { useRef } from "react";
import { Image, Box, Circle, IconButton, Flex, Text } from "@chakra-ui/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { cardScroller } from "../../utils/CardScrollbar";

import { useDarkModeTheme } from "../../contexts";

import { useSlider } from "../../hooks";
import {
  boxStyleProps,
  imageStyleProps,
  flexStyleProps,
  circleStyleProps,
} from "./styles/userstories-style-props";

import { UserStoriesType } from './types/UserStoriesType';

const UserStories = ({ followingUsers }: UserStoriesType) => {
  const { scrollHandler, cardSlider, userStoriesSlider } = useSlider();

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  return (
    <Box bg={cardBg} ref={userStoriesSlider} {...boxStyleProps}>

      {followingUsers?.following.map((user) => {
        return (
          <Flex key={user._id} {...flexStyleProps} >
            <Image
              src={user.avatarUrl}
              alt={user.username}
              {...imageStyleProps}
            />

            <Text color={cardText}>{user.username}</Text>
          </Flex>
        );
      })}
      <Flex key={followingUsers?._id} {...flexStyleProps}>
        <Image
          src={followingUsers?.avatarUrl}
          alt={followingUsers?.username}
          {...imageStyleProps}
        />

        <Text color={cardText}>{followingUsers?.username}</Text>
      </Flex>

      <Circle
        size="2.3rem"
        {...circleStyleProps}
        onClick={(event) => cardSlider(event)}
      >
        <ChevronLeftIcon
          style={{ color: "black" }}
          onClick={(event) => cardSlider(event)}
        />
      </Circle>
      <Circle
        size="2.3rem"
        bg="white"
        boxShadow="lg"
        color="white"
        position="absolute"
        right="-20px"
        cursor="pointer"
        data-righticon="righticon"
        onClick={(event) => cardSlider(event)}
      >
        <ChevronRightIcon
          style={{ color: "black" }}
          onClick={(event) => cardSlider(event)}
        />
      </Circle>
    </Box>
  );
};

export { UserStories };

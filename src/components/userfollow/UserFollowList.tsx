import React, { memo, useCallback, useMemo } from "react";
import { Box, Flex, Image, Text, Spacer, Button } from "@chakra-ui/react";
import { useDarkModeTheme } from "../../contexts";

import {
  imageStyleProps,
  BoxStyleProps,
  followButtonStyleProps,
  userFollowContainerStyleProps,
  userFollowBoxContainer,
} from "./styles/userfollowlist-style.props";

import { follow } from "../../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

import { userinfoProps } from "./types/UserFollowType";

const UserFollowList = ({ userinfo }: userinfoProps) => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const dispatch = useDispatch<AppDispatch>();

  const { userToken } = useSelector(
    (state) => (state as RootState).authentication
  );


  return (
    <Flex key={userinfo._id} {...userFollowContainerStyleProps}>
      <Box {...userFollowBoxContainer}>
        <Image
          src={userinfo.avatarUrl}
          alt={userinfo.username}
          {...imageStyleProps}
        />
        <Flex direction="column">
          <Text fontWeight="bold" color={cardText}>
            {`${userinfo.firstName} ${userinfo.lastName}`}
          </Text>
          <Text color={cardLightText} fontWeight="semibold">
            {userinfo.username}
          </Text>
        </Flex>

        <Spacer />

        <Box {...BoxStyleProps}>
          <Button
            {...followButtonStyleProps}
            onClick={() => {
              dispatch(
                follow({
                  userid: userinfo._id,
                  userToken: userToken!,
                  dispatch,
                })
              );
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export { UserFollowList };

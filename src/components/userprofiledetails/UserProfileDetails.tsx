import React, { useEffect } from "react";
import { Flex, Heading, Box, Button, Text, Link, useDisclosure } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { useDarkModeTheme } from "../../contexts";

import {
  flexStyleProps,
  usernameBoxContainerStyleProps,
  userNameHeadingStyleProps,
  userHeadingStyleProps,
  linkStyleProps,
  userFollowCountDivStyleProps,
  userFollowCountsStyleProps,
  userProfileTextStyleProps,
} from "./styles/user-profile-details-style-props";

import { usersType } from "./types/UserprofileDetailsType";

import { EditProfileModal } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { userProfileDetails } from "../../store/slices";

const UserProfileDetails = ({ userdetails }: usersType) => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const { onOpen, onClose, isOpen } = useDisclosure();

  const { userDetails } = useSelector(
    (state) => (state as RootState).authentication
  );

  const dispatch = useDispatch<AppDispatch>
  return (
    <>
      <Flex {...flexStyleProps}>
        {/* username */}
        <Box {...usernameBoxContainerStyleProps}>
          <Heading {...userNameHeadingStyleProps}>
            {userdetails?.username.toUpperCase()}
          </Heading>
          {userDetails?.username === userdetails?.username && <Button size="sm" variant="outline" onClick={onOpen}>
            Edit Profile
          </Button>}
        </Box>
        {/* user-follow-counts */}
        <Box {...userFollowCountsStyleProps}>
          <Box {...userFollowCountDivStyleProps}>
            <Text {...userProfileTextStyleProps}>3</Text>
            <Text as="span" fontSize="1.2rem">
              Posts
            </Text>
          </Box>
          <Box {...userFollowCountDivStyleProps}>
            <Text {...userProfileTextStyleProps}>
              {userdetails?.followers.length}
            </Text>
            <Text as="span" fontSize="1.2rem">
              followers
            </Text>
          </Box>
          <Box {...userFollowCountDivStyleProps}>
            <Text {...userProfileTextStyleProps}>
              {userdetails?.following.length}
            </Text>
            <Text as="span" fontSize="1.2rem">
              following
            </Text>
          </Box>
        </Box>

        {/* user bio */}
        <Box>
          <Heading {...userHeadingStyleProps}>{userdetails?.bio}</Heading>
        </Box>
        <Box>
          <Link
            href={userdetails?.website!}
            isExternal
            {...linkStyleProps}
          >
            {userdetails?.website} <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      </Flex>
      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export { UserProfileDetails };

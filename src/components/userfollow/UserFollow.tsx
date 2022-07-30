import React, { useCallback, useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Divider,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { UserFollowList } from "./UserFollowList";

import { useDarkModeTheme } from "../../contexts";
import { useSelector, useDispatch } from "react-redux";
import {
  boxContainerStyleProps,
  flexContainerStyleProps,
  headingStyleProps,
  textStyleProps,
} from "./styles/userfollow-style-props";

import { getUsers } from "../../store/slices";
import { AppDispatch, RootState } from "../../store";
import { usersType } from "../../store/types";
const UserFollow = () => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const dispatch = useDispatch<AppDispatch>();
  const { users, isUsersLoading } = useSelector(
    (state) => (state as RootState).user
  );

  const { userDetails } = useSelector(
    (state) => (state as RootState).authentication
  );

  const [userSuggestions, setUserSuggestions] = useState<usersType[]>([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [getUsers]);

  const setSuggestionsList = useCallback(() => {
    setUserSuggestions(
      users.filter(
        (user) =>
          !userDetails?.following.find(
            (userDetail) => userDetail._id === user._id
          ) && user.username !== userDetails?.username
      )
    );
  }, [userDetails, users]);
  useEffect(() => {
    setSuggestionsList();
  }, [setSuggestionsList]);


  return (
    <>
      {userSuggestions.length > 0 && (
        <Box bg={cardBg} {...boxContainerStyleProps}>
          <Flex {...flexContainerStyleProps}>
            <Box m={4}>
              <Heading color={cardText} {...headingStyleProps}>
                You May Know
              </Heading>
            </Box>
            <Spacer />

            <Box m={4}>
              <Heading {...textStyleProps}>See All</Heading>
            </Box>
          </Flex>
          <Divider />

          <Box m={4}>
            {isUsersLoading ? (
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="2"
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
                <Text>Loading Users</Text>
              </Flex>
            ) : (
              userSuggestions.map(
                (user) =>
                  user.username !== userDetails?.username && (
                    <UserFollowList userinfo={user} />
                  )
              )
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export { UserFollow };

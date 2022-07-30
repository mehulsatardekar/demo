import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  useColorMode,
  Button,
  HStack,
  Heading,
  Text,
  Spinner,
  useDisclosure
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import {
  Footer,
  UserStories,
  UserFollow,
  WhatsHappening,
  UserPostCard,
  CreatePost
} from "../../components";

import {
  flexContainerStyleProps,
  containerStyleProps,
  userPostCardContainer,
  rightContainerStyleProps,
} from "./style/homepage-style-props";
import { Toaster } from "react-hot-toast";
import { getPosts, postAction } from "../../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useDarkModeTheme } from "../../contexts";

import { postType } from "../../store/types";


const Homepage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { posts, sortPostBy, isPostLoading } = useSelector(
    (state) => (state as RootState).post
  );
  const { userDetails } = useSelector(
    (state) => (state as RootState).authentication
  );

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const [timelinePost, setTimelinePost] = useState<postType[]>([]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      userDetails!.following.find((user) => user.username === post.username) ||
      userDetails?.username === post.username
  );


  const setUserTimelinePost = (sortPostBy: string) => {
    switch (sortPostBy) {
      case "TRENDING":
        setTimelinePost(
          filteredPosts
            .filter((post) => post.likes.likeCount >= 0)
            .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        );
        break;
      case "LATEST":
        setTimelinePost(
          filteredPosts.sort(
            (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
          )
        );
        break;
      default:
        setTimelinePost(filteredPosts);
    }
  };

  useEffect(() => {
    setUserTimelinePost(sortPostBy)

  }, [posts, userDetails, sortPostBy]);


  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Flex {...flexContainerStyleProps}>
        <Flex {...containerStyleProps}>
          <Flex {...userPostCardContainer}>
            <Box mb="2rem">
              <UserStories followingUsers={userDetails} />
            </Box>

            <Flex direction="column" gap={5}>

              {

                isPostLoading ? (isPostLoading && <Flex
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
                </Flex>) : (

                  timelinePost.length > 0 ? (
                    timelinePost.map((post) => <UserPostCard postdetails={post}  postid={post._id}/>)
                  ) : (
                    <Box textAlign="center" py={10} px={6}>
                      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
                      <Heading as="h2" size="xl" mt={6} mb={2}>
                        All are Caught Up
                      </Heading>
                      <Text color={"gray.500"}>
                        Follow your friend and see what they are up to :).
                      </Text>
                    </Box>
                  ))}
            </Flex>
          </Flex>
          {/* Right Content */}
          <Box {...rightContainerStyleProps}>
            <HStack mb={3} >
              <Button bg={cardBg} w="50%" onClick={() => dispatch(postAction.sortby('TRENDING'))} >
                Trending
              </Button>
              <Button bg={cardBg} w="50%" onClick={() => dispatch(postAction.sortby('LATEST'))}>
                Latest
              </Button>
            </HStack>
            <UserFollow />

            <WhatsHappening />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Homepage;

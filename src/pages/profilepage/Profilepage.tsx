import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Text
} from "@chakra-ui/react";

import {
  UserProfileBg,
  UserProfileImage,
  UserProfileDetails,
  UserPosts,
} from "../../components";

import { useDarkModeTheme } from "../../contexts";

import {
  userProfileDetailsContainer,
  userProfileDetailsBoxStyleProps,
  tabsContainerStyleProps,
  boxTabsContainerStyleProps,
  tablistStyleProps,
} from "./style/profilepage-style-props";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { postType } from "../../store/types";
import { RootState, AppDispatch } from "../../store";
import { getPosts, userProfileDetails, loadUserPosts } from "../../store/slices";
import { userPostContainerStyleProps } from "../../components/userposts/styles/userpost-styel-props";
import { Toaster } from "react-hot-toast";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

const Profilepage = () => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();


  const { username } = useParams();
  const { userDetails } = useSelector(
    (state) => (state as RootState).authentication
  );

  const { posts, sortPostBy, isPostLoading } = useSelector(
    (state) => (state as RootState).post
  );

  const { profileDetails, postsDetails } = useSelector((state) => (state as RootState).profile);


  const dispatch = useDispatch<AppDispatch>();

  const getBookmarkedPost = (postid: string) =>
    posts.filter(post => post._id === postid)[0];

  useEffect(() => {
    dispatch(getPosts());
  }, []);


  useEffect(() => {
    dispatch(userProfileDetails({ username: username! }));
    dispatch(loadUserPosts({ username: username! }));
  }, [username, userDetails, posts])

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <Box as="main">
        <Box as="section" bg={cardBg} boxShadow="md">
          <Box {...userProfileDetailsBoxStyleProps}>
            <UserProfileBg />
            <Flex {...userProfileDetailsContainer}>
              <UserProfileImage
                image={profileDetails?.avatarUrl}
                name={profileDetails?.username}
              />
              <UserProfileDetails userdetails={profileDetails} />
            </Flex>
          </Box>
        </Box>

        <Box {...boxTabsContainerStyleProps}>
          <Tabs isLazy {...tabsContainerStyleProps}>
            <TabList {...tablistStyleProps}>
              <Tab
                _selected={{
                  color: { cardLightText },
                  fontWeight: "bold",
                  borderBottom: `2px solid ${cardLightText}`,
                }}
              >
                Post
              </Tab>
              {userDetails?.username === profileDetails.username && <Tab
                _selected={{
                  color: { cardLightText },
                  fontWeight: "bold",
                  borderBottom: `2px solid ${cardLightText}`,
                }}
              >
                Saved
              </Tab>}

            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex {...userPostContainerStyleProps}>
                  {
                    postsDetails.length > 0 ? (
                      postsDetails.map(userpost => <UserPosts postdetails={userpost} isActionsVisible={true} />
                      )
                    ) : (<Box textAlign="center" py={10} px={6}>
                      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
                      <Heading as="h2" size="xl" mt={6} mb={2}>
                        No Post show
                      </Heading>
                      <Text color={"gray.500"}>
                        Start Sharing Your moments with others.
                      </Text>
                    </Box>)
                  }
                </Flex>
              </TabPanel>
              {userDetails?.username === profileDetails.username && <TabPanel>
                <Flex {...userPostContainerStyleProps}>
                  {
                    userDetails!?.bookmarks.length > 0 ? (
                      userDetails?.bookmarks.map(post => <UserPosts postdetails={getBookmarkedPost(post)} isActionsVisible={false} isRemovedPostFromBookmark={true} />)
                    ) : (
                      <Box textAlign="center" py={10} px={6}>
                        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
                        <Heading as="h2" size="xl" mt={6} mb={2}>
                          You dont have any saved post
                        </Heading>
                        <Text color={"gray.500"}>
                          You can save post and see them anytime
                        </Text>
                      </Box>
                    )
                  }
                </Flex>
              </TabPanel>}

            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Profilepage;

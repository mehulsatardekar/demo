import { Flex, Box, Image, AspectRatio, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { imgBoxStyle, aspectRatio, aspectRatioHover, videoStyleProps, userPostContainerStyleProps, boxStyleProps, textStyleProps, iconButtonsProps } from './styles/userpost-styel-props';
import { v4 as uuidv4 } from 'uuid';

import { postType } from "../../store/types";
import { deleteUserPost, removeFromBookmark } from "../../store/slices";
import { useToast } from "../../hooks/";
import { CreatePost } from "../index";


type userPostCardProps = {
  postdetails: postType;
  isActionsVisible: boolean;
  isRemovedPostFromBookmark?: boolean;
};
export type { userPostCardProps };

const UserPosts = ({ postdetails, isActionsVisible, isRemovedPostFromBookmark }: userPostCardProps) => {

  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useDispatch<AppDispatch>();

  const { userDetails, userToken } = useSelector(
    (state) => (state as RootState).authentication
  );

  const { profileDetails, postsDetails } = useSelector((state) => (state as RootState).profile);

  const { notifyError, notifySuccess } = useToast();


  const deletePostOfUser = (postid: string) => {
    dispatch(deleteUserPost({ postid: postid, userToken: userToken! }));

  }

  const removeSavedBookmarkPost = (postid: string) => {
    dispatch(removeFromBookmark({ postid: postid, userToken: userToken! }));
    notifySuccess("Post removed from bookmark");
  }

  return (

    <>
      {
        userDetails &&
          postdetails.mediaURL.split("/")[4] === "image" ? (
          <Box as="div" position="relative" key={uuidv4()}>
            <Box>
              {
                isActionsVisible && userDetails?.username === profileDetails.username && <Box position="relative">
                  <IconButton aria-label='Edit Post' {...iconButtonsProps} icon={<EditIcon />} sx={{ color: "white", position: "absolute", right: "3.9rem", top: "5px" }}
                    onClick={onOpen}
                  />
                  <IconButton aria-label='Delete Post' {...iconButtonsProps} icon={<DeleteIcon />} sx={{ color: "white", position: "absolute", right: "10px", top: "5px" }}
                    onClick={() => deletePostOfUser(postdetails._id)}
                  />
                </Box>

              }
              {
                isRemovedPostFromBookmark && <Box position="relative">
                  <IconButton aria-label='Delete Bookmark Post' {...iconButtonsProps} icon={<DeleteIcon />} sx={{ color: "white", position: "absolute", right: "10px", top: "5px" }}
                    onClick={() => removeSavedBookmarkPost(postdetails._id)}
                  />
                </Box>

              }
              <AspectRatio
                sx={aspectRatio}
                _hover={aspectRatioHover}
              >
                <Image
                  src={postdetails.mediaURL}
                  sx={imgBoxStyle}
                  alt={postdetails.username}
                  objectFit="cover"
                ></Image>
              </AspectRatio>
            </Box>
            <Flex justify="center">
              <Box {...boxStyleProps}>
                <FavoriteIcon sx={{ color: "white" }} />
                <Text {...textStyleProps}>
                  {postdetails.likes.likeCount}
                </Text>

                <ChatIcon sx={{ color: "white" }} />
                <Text {...textStyleProps}>
                  {postdetails.comments.length}
                </Text>
              </Box>
            </Flex>
          </Box>) : (


          <Box as="div" position="relative" key={uuidv4()}>
            <Box>
              {
                isActionsVisible && userDetails?.username === profileDetails.username && <Box position="relative">
                  <IconButton aria-label='Edit Post' {...iconButtonsProps} icon={<EditIcon />} sx={{ color: "white", position: "absolute", right: "3.9rem", top: "5px" }} />
                  <IconButton aria-label='Delete Post' {...iconButtonsProps} icon={<DeleteIcon />} sx={{ color: "white", position: "absolute", right: "10px", top: "5px" }}
                    onClick={() => deletePostOfUser(postdetails._id)}
                  />
                </Box>

              }
              {
                isRemovedPostFromBookmark && <Box position="relative">
                  <IconButton aria-label='Delete Bookmark Post' {...iconButtonsProps} icon={<DeleteIcon />} sx={{ color: "white", position: "absolute", right: "10px", top: "5px" }}
                    onClick={() => removeSavedBookmarkPost(postdetails._id)}
                  />
                </Box>

              }
              <AspectRatio sx={aspectRatio} _hover={aspectRatioHover}>
                <video
                  src={postdetails.mediaURL}
                  {...videoStyleProps}
                ></video>
              </AspectRatio>
            </Box>
            <Flex justify="center">
              <Box {...boxStyleProps}>
                <FavoriteIcon sx={{ color: "white" }} />
                <Text {...textStyleProps}>
                  {postdetails.likes.likeCount}
                </Text>

                <ChatIcon sx={{ color: "white" }} />
                <Text {...textStyleProps}>
                  {postdetails.comments.length}
                </Text>
              </Box>
            </Flex>
          </Box>
        )

      }
      <CreatePost isOpen={isOpen} onClose={onClose} editPostContent={postdetails} />
    </>
  );
};

export { UserPosts };



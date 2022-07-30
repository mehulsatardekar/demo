import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Spacer,
  IconButton,
  useDisclosure,
  Collapse,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
} from "@chakra-ui/react";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDarkModeTheme } from "../../contexts";
import { useToast } from "../../hooks";

import {
  imageStyleProps,
  userCommentContainerStyleProps,
  userCommentNameStyleProps,
  userCommentStyleProps,
  showMoreAndLessStyleProps,
  flexContainerStyleProps,
} from "./styles/userModalAddComment-style-props";
import { usersType } from "../../store/types";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteComment } from '../../store/slices'
import { v4 as uuidv4 } from 'uuid';

import { EditCommentModal } from '../index'
type commentType = {
  _id: string;
  text: string;
  username: string;
  votes: {
    upvotedBy: [];
    downvotedBy: [];
  };
};
type userModalAddCommentProps = {
  comment: commentType;
  postid?: string;
};

const UserModalAddComment = ({ comment, postid }: userModalAddCommentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch<AppDispatch>();
  const { notifyError, notifySuccess } = useToast();

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const [show, setShow] = useState(false);
  const [currentusersDetails, setCurrentUserDetails] = useState<usersType>();
  const { users } = useSelector((state) => (state as RootState).user);
  const { userDetails, userToken } = useSelector(
    (state) => (state as RootState).authentication
  );
  const handleToggle = () => setShow(!show);

  useEffect(
    () =>
      setCurrentUserDetails(
        users.filter((user) => user.username === comment.username)[0]
      ),
    [users, comment]
  );


  return (
    <>
      <Flex key={uuidv4()} {...flexContainerStyleProps}>
        <Flex gap="1rem">
          <Image
            src={currentusersDetails?.username === userDetails?.username ? userDetails?.avatarUrl : currentusersDetails?.avatarUrl}
            alt="views"
            {...imageStyleProps}
          />
          <Flex {...userCommentContainerStyleProps} >
            <Flex {...userCommentNameStyleProps}>
              <Heading as="h6" size="md">
                {currentusersDetails?.username}
              </Heading>
              <Text color={cardLightText}>3 Days ago</Text>
            </Flex>

          </Flex>
          <Box {...userCommentStyleProps}>
            <Collapse startingHeight={20} in={show}>
              {comment.text}
            </Collapse>

            <Text
              onClick={handleToggle}
              color={cardLightText}
              {...showMoreAndLessStyleProps}
            >
              Show {show ? "Less" : "More"}
            </Text>
          </Box>
        </Flex>
        <Spacer />
        {userDetails?.username === currentusersDetails?.username &&
          <Menu isLazy>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              borderRadius="full"
              icon={<MoreVertIcon />}
              variant='outline'
              sx={{ color: cardText }}
            />
            <MenuList bg={cardBg}>
              <MenuItem icon={<EditIcon />} onClick={onOpen}>
                Edit
              </MenuItem>
              <MenuItem icon={<DeleteIcon />} onClick={() => {
                dispatch(deleteComment({
                  postid: postid,
                  commentid: comment._id,
                  userToken: userToken!
                }))
                notifySuccess('Comment Deleted successfully');
              }}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>

        }
      </Flex>
      <EditCommentModal isOpen={isOpen} onClose={onClose} postid={postid} usercomment={comment} />
    </>
  );
};

export { UserModalAddComment };

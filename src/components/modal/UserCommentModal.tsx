import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalOverlay,
  Divider,
  ModalContent,
  Flex,
  Text,
  Box,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

import { modalPropsType } from "./types/PostModal";

import { useDarkModeTheme } from "../../contexts";

import { PostCardTitle, PostAddComment, UserModalAddComment, UserModalDescription } from "../index";
import { v4 as uuidv4 } from 'uuid';

import {
  boxStyleProps,
  modalOverLayStyleProps,
  aspectRatioStyleProps,
  imageStyleProps,
  userCommentModalStyle,
  modalBodyStyleProps,
  modalStyleProps,
} from "./styles/usercommentmodal-style-props";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { usersType } from "../../store/types";

const UserCommentModal = ({ isOpen, onClose, postdetails }: modalPropsType) => {
  const [currentusersDetails, setCurrentUserDetails] = useState<usersType>();

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const { users } = useSelector((state) => (state as RootState).user);

  const { userDetails } = useSelector(
    (state) => (state as RootState).authentication
  );
  useEffect(() => {
    if (users.length > 0)
      setCurrentUserDetails(
        users.filter((user) => user.username === postdetails!.username)[0]
      );
  }, [users, postdetails!.username!]);


  return (
    <>
      {
        postdetails && <Modal isCentered key={uuidv4()} isOpen={isOpen} onClose={onClose} {...modalStyleProps}>
          <ModalOverlay {...modalOverLayStyleProps} />
          <ModalContent maxW="86rem" maxH="86rem" bg={cardBg}>
            <ModalHeader color={cardText}>Comments</ModalHeader>
            <ModalCloseButton color={cardText} />
            <Divider />

            <ModalBody bg={cardBg}>
              <Flex {...modalBodyStyleProps}>
                <Box {...boxStyleProps}>
                  {
                    postdetails?.mediaURL && <AspectRatio {...aspectRatioStyleProps}>
                      {postdetails!.mediaURL.split("/")[4] === "image" ? (
                        <Image
                          src={postdetails!.mediaURL}
                          alt={postdetails!.username}
                          {...imageStyleProps}
                        />
                      ) : (
                        <video controls>
                          <source src={postdetails!.mediaURL} />
                        </video>
                      )}
                    </AspectRatio>
                  }
                </Box>
                <Flex {...userCommentModalStyle}>
                  <Box bg={cardBg}>
                    <PostCardTitle postimage={
                      currentusersDetails?.username === userDetails?.username
                        ? userDetails?.avatarUrl
                        : currentusersDetails?.avatarUrl
                    }
                      postusername={
                        currentusersDetails?.firstName + "" + currentusersDetails?.lastName
                      } />
                  </Box>
                  <Divider />

                  <Box>
                    <UserModalDescription postdescription={postdetails?.content} postimage={
                      currentusersDetails?.username === userDetails?.username
                        ? userDetails?.avatarUrl
                        : currentusersDetails?.avatarUrl
                    }
                      postusername={
                        currentusersDetails?.username
                      } />
                  </Box>
                  <Divider />
                  <Box overflowY="auto" height="70%">
                    {postdetails?.comments.map((comment) => (
                      <UserModalAddComment comment={comment} postid={postdetails._id} />
                    ))}
                  </Box>
                  <Box boxShadow="md">
                    <PostAddComment postid={postdetails?._id!} />
                  </Box>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      }
    </>
  );
};

export { UserCommentModal };

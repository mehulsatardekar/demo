import React from "react";
import {
  Flex,
  Box,
  Icon,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from '@mui/icons-material/Forum';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { UserCommentModal } from "..";
import { useDarkModeTheme } from "../../contexts";
import { userPostCardProps } from "./types";

const PostCardLikeSaveComment = ({ postdetails, likePost, isPostAlreadyLiked, bookmarkPost, isPostAlreadyBookmarked }: userPostCardProps) => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();


  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex m="0.3rem 0.5rem " key={postdetails._id}>
        <Box display="flex" gap={2}>
          <Box
            as={IconButton}
            bg={cardBg}
            borderRadius="full"
            aria-label="like post"
            onClick={() => likePost!()}
          >
            {
              isPostAlreadyLiked!() ? (<Icon as={FavoriteIcon} sx={{ color: "red" }} cursor="pointer" />
              ) : (<Icon as={FavoriteBorderIcon} sx={{ color: cardText }} cursor="pointer" />)
            }
          </Box>
          <Box
            as={IconButton}
            bg={cardBg}
            borderRadius="full"
            aria-label="comment on post"
            onClick={onOpen}
          >

            <Icon as={ForumIcon} sx={{ color: "#807D7D" }} cursor="pointer" />
          </Box>
          <UserCommentModal isOpen={isOpen} onClose={onClose} postdetails={postdetails} />
        </Box>
        <Spacer />
        <Box
          as={IconButton}
          bg={cardBg}
          borderRadius="full"
          aria-label="save post"
          onClick={() => bookmarkPost!()}
        >

          {
            isPostAlreadyBookmarked!() ? (<Icon
              as={TurnedInIcon}
              sx={{ color: cardText }}
              cursor="pointer"
            />) : (<Icon
              as={BookmarkBorderIcon}
              sx={{ color: cardText }}
              cursor="pointer"
            />)
          }

        </Box>
      </Flex>
    </>
  );
};

export { PostCardLikeSaveComment };

import React from "react";

import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Spacer,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { PostModal } from "../../components";

import { useDarkModeTheme } from "../../contexts";

import {
  imageStyleProps,
  flexContainerStyleProps,
  postCardContainerStyleProps,
} from "./styles/postCardTitle-style-props";

type postCardTitleProps = {
  postimage: string | undefined;
  postusername: string | undefined;
  postdestination?: string;
};
const PostCardTitle = ({ postimage, postusername, postdestination }: postCardTitleProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  return (
    <Flex  {...flexContainerStyleProps}>
      <Box display="flex" gap={2}>
        <Image src={postimage} {...imageStyleProps} />
        <Flex {...postCardContainerStyleProps}>
          <Heading as="h6" size="md" color={cardText}>
            {postusername}
          </Heading>
          <Text as="p" size="md" color={cardLightText}>
            {postdestination}
          </Text>
        </Flex>
      </Box>

      <Spacer />

      <Box
        as={IconButton}
        bg={cardBg}
        borderRadius="full"
        onClick={onOpen}
        aria-label="post information"
      >
        <Icon as={MoreHorizIcon} cursor="pointer" sx={{ color: cardText }} />
      </Box>

      {/* modal  */}
      <PostModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export { PostCardTitle };

import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Spacer,
  IconButton,
  Icon,
  useDisclosure,
  Divider,
  Collapse,
} from "@chakra-ui/react";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { useDarkModeTheme } from "../../contexts";

import {
  imageStyleProps,
  userCommentContainerStyleProps,
  userCommentNameStyleProps,
  userCommentStyleProps,
  showMoreAndLessStyleProps,
  flexContainerStyleProps,
} from "./styles/userModalAddComment-style-props";
import { v4 as uuidv4 } from 'uuid';


type userModalAddCommentProps = {
  postdescription?: string;
  postimage: string | undefined;
  postusername: string | undefined;
};

const UserModalDescription = ({
  postdescription,
  postimage,
  postusername
}: userModalAddCommentProps) => {
  const { onOpen } = useDisclosure();

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Flex key={uuidv4()} {...flexContainerStyleProps}>
      <Flex gap="1rem">
        <Image
          src={postimage}
          alt="views"
          {...imageStyleProps}
        />
        <Flex {...userCommentContainerStyleProps}>
          <Flex {...userCommentNameStyleProps}>
            <Heading as="h6" size="md">
              {postusername}
            </Heading>
            <Text color={cardLightText}>5 Days ago</Text>
          </Flex>
          <Box {...userCommentStyleProps}>
            <Collapse startingHeight={20} in={show}>
              {postdescription}
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
      </Flex>
      <Spacer />
      <Box
        as={IconButton}
        bg={cardBg}
        borderRadius="full"
        onClick={onOpen}
        aria-label="post information"
      ></Box>
    </Flex>
  );
};

export { UserModalDescription };

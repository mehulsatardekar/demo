import React from "react";
import { Flex, Box, Heading, Divider } from "@chakra-ui/react";

import { NewsList } from "./NewsList";
import { useDarkModeTheme } from "../../contexts";

import {
  headingStyleProps,
  boxStyleProps,
} from "./styles/whatshappening-style-props";


const WhatsHappening = () => {

  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  return (
    <Box bg={cardBg} {...boxStyleProps}>
      <Flex maxW="100%">
        <Box m={4}>
          <Heading color={cardText} {...headingStyleProps}>
            What's Happening
          </Heading>
        </Box>
      </Flex>
      <Divider />
      <Box m={4}>
        <NewsList />
      </Box>
    </Box>
  );
};

export { WhatsHappening };

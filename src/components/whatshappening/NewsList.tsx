import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Divider,
  Button,
  Spacer,
} from "@chakra-ui/react";

import { useDarkModeTheme } from "../../contexts";

import {
  newsListContainerStyleProps,
  textStyleProps,
  headingStyleProps,
  boxStyleProps,
  textdescriptionStyleProps
} from "./styles/newslist-style-props";

const NewsList = () => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();
  return (
    <Flex {...newsListContainerStyleProps}>
      <Box {...boxStyleProps}>
        <Text color={cardLightText} {...textStyleProps}>
          Sports Trending
        </Text>
        <Heading {...headingStyleProps} color={cardText}>
          #Virat
        </Heading>
      </Box>
      <Divider />

      <Flex cursor="pointer">
        <Box>
          <Text color={cardLightText} {...textStyleProps}>
            T-20 World Cup Trending
          </Text>
          <Heading {...headingStyleProps} color={cardText}>
            #India vs Aus
          </Heading>
          <Text color={cardLightText} {...textdescriptionStyleProps}>
            IPL 2022: Dhoni wins the game for Chennai Super Kings
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>

      <Divider />

      <Box cursor="pointer">
        <Text color={cardLightText} {...textStyleProps}>
          T-20 World Cup Trending
        </Text>
        <Heading {...headingStyleProps} color={cardText}>
          #India vs Aus
        </Heading>
      </Box>

      <Divider />
    </Flex>
  );
};

export { NewsList };

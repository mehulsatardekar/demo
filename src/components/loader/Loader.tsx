import React from "react";

import { Spinner, Flex, Text } from "@chakra-ui/react";

import {
  spinnerStyleProps,
  loaderContainerProps,
} from "./styles/loader-style-props";
const Loader = () => {
  return (
    <Flex {...loaderContainerProps}>
      <Spinner {...spinnerStyleProps} />
      <Text as="h6">Loading...</Text>
    </Flex>
  );
};

export { Loader };

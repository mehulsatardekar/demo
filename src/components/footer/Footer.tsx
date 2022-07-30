import React from "react";
import {
  Button,
  ButtonGroup,
  Divider,
  Stack,
  Text,
  Box,
  Icon,
} from "@chakra-ui/react";

import { LogoText } from "../logotext/LogoText";
import { useDarkModeTheme } from "../../contexts";

import {
  footerStackStyleProps,
  buttonStyleProps,
  stackContainerStyleProps,
  trademarkStyleProps,
} from "./styles/footer-style-props";

const Footer = () => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  return (
    <Box as="footer" role="contentinfo" bg={cardBg} color={cardText} p="1rem">
      <Stack {...footerStackStyleProps}>
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <LogoText size={"1.7rem"} />
          <Text color="muted">Flicker where people connect</Text>
        </Stack>
        <Stack {...stackContainerStyleProps}>
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Product
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button {...buttonStyleProps}>How it works</Button>
                <Button {...buttonStyleProps}>Pricing</Button>
                <Button {...buttonStyleProps}>Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button {...buttonStyleProps}>Privacy</Button>
                <Button {...buttonStyleProps}>Terms</Button>
                <Button {...buttonStyleProps}>License</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack {...trademarkStyleProps}>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} flicker, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <Icon as="a" href="#" aria-label="LinkedIn" />
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export { Footer };

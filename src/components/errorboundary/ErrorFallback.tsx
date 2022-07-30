import { Button, Flex, Text } from "@chakra-ui/react";
import { errorFallbackStyleProps } from "./styles/error-fallback-style-props";

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <>
      <Flex {...errorFallbackStyleProps}>
        <Text as="p">Something went wrong:</Text>
        <Text as="pre">{error.message}</Text>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </Flex>
    </>
  );
};

export default ErrorFallback;

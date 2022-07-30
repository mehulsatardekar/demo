const containerStyleProps = {
  maxW: "7xl",
  columns: { base: 1, md: 2 },
  spacing: { base: 10, lg: 32 },
  py: { base: 10, sm: 20, lg: 32 },
};

const headingStyleProps = {
  lineHeight: 1.1,
  fontSize: { base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" },
};

const textStyleProps = {
  as: "span" as "span",
  bgGradient: "linear(to-r, red.400,pink.400)",
  bgClip: "text",
};

const avatarStyleProps = {
  position: "relative" as "relative",
  zIndex: 2,
  _before: {
    content: '""',
    width: "full",
    height: "full",
    rounded: "full",
    transform: "scale(1.125)",
    bgGradient: "linear(to-bl, red.400,pink.400)",
    position: "absolute" as "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
  },
};

const blurStyleProps = {
  position: "absolute" as "absolute",
  top: -10,
  left: -10,
  style: { filter: "blur(70px)" },
};

const submitButtonStyleProps = {
  fontFamily: "heading",
  mt: 8,
  w: "full",
  bgGradient: "linear(to-r, red.400,pink.400)",
  color: "white",
  _hover: {
    bgGradient: "linear(to-r, red.400,pink.400)",
    boxShadow: "xl",
  },
};

const passwordStyleProps = {
  bg: "gray.100",
  border: 0,
  color: "gray.500",
  placeholder: "*************",
  _placeholder: {
    color: "gray.500",
  },
};

const emailStyleProps = {
  bg: "gray.100",
  border: 0,
  color: "gray.500",
  placeholder: "eg: alex791@gmail.com",
  _placeholder: {
    color: "gray.500",
  },
};

const formLabelStyleProps = {
  color: "blackAlpha.800",
};

const avatarStackContainerStyleProps = {
  direction: "row" as "row",
  spacing: 4,
  align: "center",
};

const textStackStyleProps = {
  fontFamily: "heading",
  fontSize: { base: "4xl", md: "6xl" },
};

const circleStoriesStyleProps = {
  align: "center",
  justify: "center",
  fontFamily: "heading",
  fontSize: { base: "sm", md: "lg" },
  bg: "gray.800",
  color: "white",
  rounded: "full",
  position: "relative" as "relative",
  _before: {
    content: '""',
    width: "full",
    height: "full",
    rounded: "full",
    transform: "scale(1.125)",
    bgGradient: "linear(to-bl, orange.400,yellow.400)",
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
  },
};

const loginFormStyleProps = {
  rounded: "xl",
  p: { base: 4, sm: 6, md: 8 },
  spacing: { base: 8 },
  maxW: { lg: "lg" },
};

const formHeadStyleProps = {
  display: "flex",
  justifyContent: "center",
  lineHeight: 1.1,
  fontSize: { base: "2xl", sm: "3xl", md: "4xl" },
};

const formTitleStyleProps = {
  fontSize: { base: "sm", sm: "md" },
};

const linkStyleProps = {
  color: "#2B6CB0",
  textDecoration: "underline",
};
export {
  containerStyleProps,
  headingStyleProps,
  textStyleProps,
  avatarStyleProps,
  blurStyleProps,
  submitButtonStyleProps,
  passwordStyleProps,
  emailStyleProps,
  formLabelStyleProps,
  avatarStackContainerStyleProps,
  textStackStyleProps,
  circleStoriesStyleProps,
  loginFormStyleProps,
  formHeadStyleProps,
  formTitleStyleProps,
  linkStyleProps,
};

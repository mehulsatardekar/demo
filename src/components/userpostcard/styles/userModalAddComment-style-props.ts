const imageStyleProps = {
  borderRadius: "full",
  maxW: "40px",
  minH: "40px",
  w: "40px",
  h: "40px",
  border: "3px solid orange",
};

const userCommentContainerStyleProps = {
  direction: {
    base: "column" as "column",
    md: "row" as "row",
    lg: "row" as "row",
  },
  gap: "1rem",
  justifyContent: "space-around",
};

const userCommentNameStyleProps = {
  direction: {
    base: "row" as "row",
    md: "column" as "column",
    lg: "column" as "column",
  },
  gap: "3",
};

const userCommentStyleProps = {
  size: "md",
  w: { base: "100%" as "100%", md: "70%" as "70%", lg: "70%" as "70%" },
};

const showMoreAndLessStyleProps = {
  fontWeight: "semibold",
  cursor: "pointer",
  size: "sm",
  mt: "1rem",
};

const flexContainerStyleProps = {
  direction: "row" as "row",
  p: "3",
  gap: "1rem",
  justifyContent: "space-between",
};
export {
  imageStyleProps,
  userCommentContainerStyleProps,
  userCommentNameStyleProps,
  userCommentStyleProps,
  showMoreAndLessStyleProps,
  flexContainerStyleProps,
};

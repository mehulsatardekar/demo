const flexContainerStyleProps = {
  justify: "center",
  p: "16px 0px",
};

const containerStyleProps = {
  width: { base: "95%", md: "80%", lg: "80%" },
  justify: "center",
  gap: "3rem",
};

const userPostCardContainer = {
  direction: "column" as "column",
  width: { base: "100%", md: "65%", lg: "60%" },
  mr: { base: 0, md: 6 },
  position: "relative" as "relative",
  flexGrow: "13",
};

const rightContainerStyleProps = {
  display: { base: "none", md: "flex" },
  flexDirection: "column" as "column",
  position: "sticky" as "sticky",
  top: "0",
};
export { flexContainerStyleProps, containerStyleProps, userPostCardContainer, rightContainerStyleProps };

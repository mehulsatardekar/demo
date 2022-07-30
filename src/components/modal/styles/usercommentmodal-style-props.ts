const boxStyleProps = {
  flex: "1",
  h: { base: "50vh", md: "80vh", lg: "80vh" },
  bg: "red.100",
};

const modalStyleProps = {
  size: "xl",
  w: "10px",
  scrollBehavior: "inside" as "inside",
};

const modalOverLayStyleProps = {
  bg: "blackAlpha.800",
  backdropFilter: "auto",
  backdropInvert: "40%",
  backdropBlur: "3px",
};

const aspectRatioStyleProps = {
  ratio: {
    base: ((4 / 3) as 4) / 3,
    md: ((16 / 1) as 16) / 1,
    lg: ((1 / 1) as 1) / 1,
  },
  h: { base: "28vh" as "28vh", md: "80vh" as "80vh", lg: "80vh" as "80vh" },
};

const imageStyleProps = {
  h: { base: "28vh" as "28vh", md: "80vh" as "80vh", lg: "80vh" as "80vh" },
};

const userCommentModalStyle = {
  flex: "2",
  h: { base: "50vh", md: "80vh", lg: "80vh" },
  direction: "column" as "column",
  justify: "space-between",
};

const modalBodyStyleProps = {
  h: "80vh",
  direction: {
    base: "column" as "column",
    md: "row" as "row",
    lg: "row" as "row",
  },
};
export {
  boxStyleProps,
  imageStyleProps,
  modalOverLayStyleProps,
  aspectRatioStyleProps,
  userCommentModalStyle,
  modalBodyStyleProps,
  modalStyleProps,
};

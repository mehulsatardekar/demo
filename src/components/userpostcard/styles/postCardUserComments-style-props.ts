const flexContainerStyleProps = {
  as: "section" as "section",
  direction: "column" as "column",
  m: "0.3rem 1rem",
  gap: "4",
};

const likesStyleProps = {
  as: "h6" as "h6",
  size: "md",
  fontWeight: "bold",
};

const likeTextStyleProps = {
  as: "span" as "span",
  size: "md",
  fontWeight: "semibold",
};

const commentContainerStyleProps = {
  display: "flex",
  direction: "row",
  gap: "2",
};

const commentStyleProps = {
  as: "p" as "p",
  size: "md",
  textOverflow: "ellipsis",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap" as "nowrap",
};

const boxStyleProps = {
  display: "flex",
  direction: "row",
};

const textStyleProps = {
  fontSize: "0.8rem",
  fontWeight: "semibold",
};

export {
  flexContainerStyleProps,
  likesStyleProps,
  likeTextStyleProps,
  commentContainerStyleProps,
  commentStyleProps,
  boxStyleProps,
  textStyleProps,
};

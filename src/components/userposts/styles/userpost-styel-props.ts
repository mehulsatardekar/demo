const imgBoxStyle = {
  w: "320px",
  h: "320px",
  minW: "320px",
  maxW: "350px",
  minH: "320px",
  maxH: "350px",
};

const aspectRatio = {
  w: "320px",
  h: "320px",
  ratio: "{4 / 3}",
  zIndex: "1",
  cursor: "pointer",
};

const aspectRatioHover = {
  filter: "auto",
  brightness: "60%",
  cursor: "pointer",
  zIndex: "-1",
};

const videoStyleProps = {
  objecfit: "cover",
  filter: "auto",
  blur: "2px",
};

const userPostContainerStyleProps = {
  as: "section" as "section",
  flexWrap: "wrap" as "wrap",
  gap: "5",
  justify: "center",
};

const boxStyleProps = {
  display: "flex",
  gap: "15px",
  position: "absolute" as "absolute",
  top: "8rem",
};

const textStyleProps = {
  as: "span" as "span",
  color: "white",
};

const iconButtonsProps = {
  variant: "outline",
  size: "md",
  colorScheme: "teal",
  borderRadius: "full",
};
export {
  imgBoxStyle,
  aspectRatio,
  aspectRatioHover,
  videoStyleProps,
  userPostContainerStyleProps,
  boxStyleProps,
  textStyleProps,
  iconButtonsProps,
};

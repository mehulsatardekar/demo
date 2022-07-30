const boxStyleProps = {
  display: "flex",
  minW: "100%",
  maxW: "100%",
  p: "1rem 3rem",
  flexDirection: "row" as "row",
  alignItems: "center",
  gap: "6",
  overflowY: "hidden" as "hidden",
  overflowX: "hidden" as "hidden",
  justify: "center",
  borderRadius: "5px",
  boxShadow: "base",
};

const imageStyleProps = {
  maxW: "70px",
  minH: "70px",
  w: "70px",
  h: "70px",
  border: "3px solid orange",
  borderRadius: "full",
};

const flexStyleProps = {
  flexDirection: "column" as "column",
  alignItems: "center",
  justify: "center",
  gap: "2",
};

const circleStyleProps = {
  bg: "white",
  boxShadow: "lg",
  color: "white",
  position: "absolute" as "absolute",
  left: "-20px",
  cursor: "pointer",
};
export { boxStyleProps, imageStyleProps, flexStyleProps, circleStyleProps };

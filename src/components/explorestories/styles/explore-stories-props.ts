const gridStyleProps = {
  h: "auto",
  templateColumns: {
    base: "repeat(1, 1fr)",
    md: "repeat(6, 1fr)",
    lg: "repeat(6, 1fr)",
    sm: "repeat(6, 1fr)",
  },
  gap: 3,
  columnGap: "1rem",
  rowGap: "1rem",
  m: { base: "3rem 1rem", md: "2rem 1rem", lg: "2rem 1rem" },
};

const mediumAspectRatioStyleProps = {
  maxW: "100%",
  minW: "100%",
  maxH: "350px",
  h: "auto",
  ratio: { base: 3 / 3, md: 4 / 3, lg: 4 / 3 },
};

const imageStyleProps = {
  h: "100%",
  w: "100%",
  objectFit: "cover" as "cover",
};

const videoStyleProps = {
  maxW: "100%",
  minW: "100%",
  maxH: "650px",
  h: "auto",
  ratio: { base: 3 / 3, md: 4 / 3, lg: 4 / 3 },
};

const gridItemsStyleProps = {
  colSpan: [1, 2, 2, 2],
  w: "auto",
  boxShadow: "md",
};

const videoGridItemStyleProps = {
  colSpan: [1, 4, 4, 4],
  rowSpan: [1, 2, 2, 2],
  h: "auto",
  maxH: "650px",
  w: "auto",
  boxShadow: "md",
};
export {
  gridStyleProps,
  mediumAspectRatioStyleProps,
  imageStyleProps,
  gridItemsStyleProps,
  videoStyleProps,
  videoGridItemStyleProps,
};

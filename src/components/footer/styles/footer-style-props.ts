const footerStackStyleProps = {
  spacing: "8",
  direction: { base: "column" as "column", md: "row" as "row" },
  justify: "space-between",
  py: { base: "12", md: "16" },
};

const buttonStyleProps = {
  variant: "link",
  color: "#6e6b6b",
};

const stackContainerStyleProps = {
  direction: {
    base: "column-reverse" as "column-reverse",
    md: "column" as "column",
    lg: "row" as "row",
  },
  spacing: { base: "12", md: "8" },
};

const trademarkStyleProps = {
  pt: "8",
  pb: "12",
  justify: "space-between",
  direction: { base: "column-reverse" as "column-reverse", md: "row" as "row" },
  align: "center",
};
export {
  footerStackStyleProps,
  buttonStyleProps,
  stackContainerStyleProps,
  trademarkStyleProps,
};

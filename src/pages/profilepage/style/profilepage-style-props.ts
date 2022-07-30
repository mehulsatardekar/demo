const userProfileDetailsContainer = {
  direction: {
    base: "column" as "column",
    md: "row" as "row",
    lg: "row" as "row",
  },
  as: "section" as "section",
  gap: { base: "1rem", md: "5rem", lg: "7rem" },
  justify: "center",
  align: "center",
};

const userProfileDetailsBoxStyleProps = {
  as: "section" as "section",
  gap: "1rem",
  w: { base: "95%" as "95%", md: "95%" as "95%", lg: "95%" as "95%" },
  m: "auto",
  pt: "1rem",
  pb: "1rem",
};

const tabsContainerStyleProps = {
  justify: "center",
  align: "center" as "center",
  pt: "1rem",
};

const boxTabsContainerStyleProps = {
  as: "section" as "section",
  boxShadow: "md",
  pb: "3rem",
};

const tablistStyleProps = {
    display:"flex", gap:"1rem"
}
export {
  userProfileDetailsContainer,
  userProfileDetailsBoxStyleProps,
  tabsContainerStyleProps,
  boxTabsContainerStyleProps,
  tablistStyleProps
};

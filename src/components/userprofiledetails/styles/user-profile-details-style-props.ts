const flexStyleProps = {
  as: "section" as "section",
  direction: "column" as "column",
  gap: "1.3rem",
};

const usernameBoxContainerStyleProps = {
  display: "flex",
  direction: { base: "row", md: "row", lg: "column" },
  gap: { base: "3rem", md: "7rem", lg: "10rem" },
  alignItems: "center",
};

const userNameHeadingStyleProps = {
  as: "h4" as "h4",
  color: "#3E64EC",
  fontFamily: "Inter",
};

const userFollowCountsStyleProps = {
  display: "flex",
  direction: "row" as 'row',
  gap: "2rem",
  alignItems: "center",
};


const userHeadingStyleProps = {
    as:"h6" as "h6", size:"md", fontFamily:"Inter"
}

const linkStyleProps = {
    color:"#3E64EC", fontWeight:'semibold'
}

const userFollowCountDivStyleProps = {
    display:"flex", gap:"2", alignItems:"center"
}

const userProfileTextStyleProps = {
    as:"h3" as "h3", fontSize:"1.4rem", fontWeight:"bold"
}
export {
  flexStyleProps,
  usernameBoxContainerStyleProps,
  userNameHeadingStyleProps,
  userFollowCountsStyleProps,
  userHeadingStyleProps,
  linkStyleProps,
  userFollowCountDivStyleProps,
  userProfileTextStyleProps
};

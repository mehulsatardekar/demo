const imageStyleProps = {
  maxW: "50px",
  minH: "50px",
  w: "50px",
  h: "50px",
  border: "3px solid orange",
  borderRadius: "full",
};

const BoxStyleProps = {
  display: "flex",
  justify: "center",
  alignItems: "center",
};

const followButtonStyleProps = {
  colorScheme: "blue",
  variant: "ghost",
};

const userFollowContainerStyleProps = {
  direction: "column" as "column",
  gap: "5",
  pb: "10px",
};


const userFollowBoxContainer= {
    display:"flex", gap:"3"
}
export {
  imageStyleProps,
  BoxStyleProps,
  followButtonStyleProps,
  userFollowContainerStyleProps,
  userFollowBoxContainer
};

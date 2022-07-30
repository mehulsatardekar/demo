import React from "react";
import { Image, Box } from "@chakra-ui/react";

import {
  boxStyleProps,
  imageBgStyleProps,
} from "./styles/user-profile-bg-style-props";


const UserProfileBg = () => {
  return (
    <Box {...boxStyleProps}>
      <Image
        src="https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        {...imageBgStyleProps}
      ></Image>
    </Box>
  );
};

export { UserProfileBg };

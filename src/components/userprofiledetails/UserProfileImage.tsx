import React from "react";

import { Image } from "@chakra-ui/react";

import { userProfileImageStyleProps } from "./styles/user-profile-image-style-props";

type userProfileImageProps = {
  image: string | undefined;
  name: string | undefined;
};
const UserProfileImage = ({ image, name }: userProfileImageProps) => {
  return <Image src={image!} alt={name} {...userProfileImageStyleProps} />;
};

export { UserProfileImage };

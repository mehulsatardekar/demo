import { Image, AspectRatio, useBreakpointValue } from "@chakra-ui/react";

import { aspectRatioStyleProps } from "./styles/postCardImage-style-props";


type postCardImageProps = {
  postsource: string;
  postusername: string
};
const PostCardImage = ({ postsource, postusername }: postCardImageProps) => {
  return (
    <>
      {
        postsource && <AspectRatio {...aspectRatioStyleProps}>
          {postsource.split("/")[4] === "image" ? (
            <Image

              src={`https://images.weserv.nl/?url=${postsource}`}
              alt={postusername}
              style={{ objectFit: useBreakpointValue({ lg: 'contain', xl: 'contain', '2xl': "contain", md: "cover", sm: 'cover' }) }}
              loading="lazy"
            />
          ) : (
            <video controls style={{ objectFit: useBreakpointValue({ lg: 'contain', xl: 'contain', '2xl': "contain", md: "cover", sm: 'cover' }) }} >
              <source src={postsource} />
            </video>
          )}
        </AspectRatio>
      }
    </>
  );
};

export { PostCardImage };

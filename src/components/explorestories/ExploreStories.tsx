import { Grid, GridItem, AspectRatio, Image } from "@chakra-ui/react";
import {
  gridStyleProps,
  mediumAspectRatioStyleProps,
  imageStyleProps,
  gridItemsStyleProps,
  videoStyleProps,
  videoGridItemStyleProps,
} from "./styles/explore-stories-props";

import { postType } from "../../store/types";

type ExploreStoriesType = {
  stories: postType;
}


const ExploreStories = ({ stories }: ExploreStoriesType) => {

  return (
    <>
      {
        stories.mediaURL.split("/")[4] === "image" ? (
          <GridItem key={stories._id} {...gridItemsStyleProps}>
            <AspectRatio {...mediumAspectRatioStyleProps}>
              {

                <Image
                  src={`https://images.weserv.nl/?url=${stories.mediaURL}`}
                  alt={stories.username}
                  {...imageStyleProps}
                  loading="lazy"
                />

              }
            </AspectRatio>
          </GridItem>
        ) : (
          <GridItem key={stories._id} {...videoGridItemStyleProps}>
            <AspectRatio {...videoStyleProps}>

              <video controls height="100%" width="100%">
                <source
                  src={stories.mediaURL}
                  type="video/mp4"
                />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>



            </AspectRatio>
          </GridItem>
        )


      }
    </>
  );
};

export default ExploreStories;

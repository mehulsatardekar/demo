import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Box, useColorMode, Button, Grid } from "@chakra-ui/react";

import { Loader } from "../../components";
import ErrorFallback from "../../components/errorboundary/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { boxContainerStyleProps } from "./style/explore-style-props";
import { Toaster } from "react-hot-toast";
import { postType, usersType } from "../../store/types";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/slices";
import { gridStyleProps } from "../../components/explorestories/styles/explore-stories-props";

const ExploreStories = React.lazy(
  () => import("../../components/explorestories/ExploreStories")
);

const Explorepage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { posts, sortPostBy, isPostLoading } = useSelector(
    (state) => (state as RootState).post
  );

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Box {...boxContainerStyleProps}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense
            fallback={
              <>
                {" "}
                <Loader />
              </>
            }
          >
            <Grid as="section" {...gridStyleProps}>
              {
                posts && posts.map(post => <ExploreStories stories={post} />)
              }
            </Grid>


          </Suspense>
        </ErrorBoundary>
      </Box>
    </>
  );
};

export default Explorepage;

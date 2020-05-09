import React from "react";
import Skeleton, { SkeletonTheme, SkeletonProps } from "react-loading-skeleton";
import { theme } from "theme";

export const SkeletonLoader = (props: SkeletonProps) => {
  return (
    <SkeletonTheme color={theme.colors.light300} highlightColor={theme.colors.pink600}>
      <Skeleton {...props} />
    </SkeletonTheme>
  );
};

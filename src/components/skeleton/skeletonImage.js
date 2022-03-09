import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonImage({
  width,
  height,
  borderRadius = 4,
  className,
}) {
  return (
    <Skeleton
      className={className}
      variant='rectangular'
      width={width}
      height={height}
      style={{ borderRadius: borderRadius }}
    />
  );
}

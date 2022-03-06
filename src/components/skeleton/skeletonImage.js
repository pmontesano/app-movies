import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonImage({ width, height }) {
  return <Skeleton variant='rectangular' width={width} height={height} />;
}

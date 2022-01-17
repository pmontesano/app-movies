import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={2}>
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{ mt: 2, ml: 2 }}
      />
      <Skeleton variant="rectangular" width={400} height={428} />
    </Stack>
  );
}

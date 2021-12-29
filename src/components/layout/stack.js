import * as React from 'react';
import Stack from '@mui/material/Stack';

export default function DirectionStack({
  direction,
  spacing,
  children,
  ...rest
}) {
  return (
    <Stack direction={direction} spacing={spacing} {...rest}>
      {children}
    </Stack>
  );
}

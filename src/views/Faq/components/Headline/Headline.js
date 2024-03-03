import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        What We Offer
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        Here is how we can help you on your journey to restoring your health.
      </Typography>
    </Box>
  );
};

export default Headline;

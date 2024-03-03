import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          right: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          fontWeight={600}
          variant={'h2'}
          gutterBottom
          align={'center'}
        >
          About us
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          gutterBottom
        >
          ProximaRX is dedicated to providing outstanding service to all
          patients.
        </Typography>
        <Typography variant="h6" color={'text.secondary'} align={'center'}>
          We collaborate with your legal, medical, and insurance providers to
          take the financial burden out of the prescription process and have a
          greater impact on our patients and the local community.
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;

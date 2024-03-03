import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { About, Features, Hero, Trucking } from './components';

const Logistics = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        bgcolor={'alternate.main'}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            left: '5%',
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
        <Box position={'relative'} zIndex={3}>
          <Hero />
        </Box>
      </Box>
      <Container>
        <Trucking />
      </Container>
    </Main>
  );
};

export default Logistics;

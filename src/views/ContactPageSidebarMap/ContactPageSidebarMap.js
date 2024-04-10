import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';

import CustomSnackbar from 'components/Snackbar';
import { Form, Contact } from './components';

const ContactPageSidebarMap = () => {
  const theme = useTheme();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [alertType, setAlertType] = useState('success');
  // eslint-disable-next-line no-unused-vars
  const [emailMessage, setEmailMessage] = useState('Email sent successfully!');

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleEmailSent = (type, msg) => {
    setOpenSnackbar(true);
    setAlertType(type);
    setEmailMessage(msg);
  };

  return (
    <Main>
      <Form handleEmailSent={handleEmailSent} />
      <Box position={'relative'} bgcolor={'alternate.main'}>
        <Container>
          <Contact />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <CustomSnackbar
        open={openSnackbar}
        handleClose={handleSnackbarClose}
        message={emailMessage}
        type={alertType}
      />
    </Main>
  );
};

export default ContactPageSidebarMap;

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { PropTypes } from 'prop-types';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CustomSnackbar({ open, message, type, handleClose }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <div>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </div>
    </Snackbar>
  );
}

CustomSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CustomSnackbar;

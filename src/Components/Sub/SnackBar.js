import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { MdClose } from 'react-icons/md';

export default function SimpleSnackbar({ code }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    const textField = document.createElement('textarea');
    textField.innerText = code;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <MdClose />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button
        onClick={() => {
          handleClick();
        }}
        variant='outlined'
        color='inherit'
        sx={{
          right: 0,
          mx: 2,
          position: 'absolute',
          cursor: 'pointer',
        }}
      >
        Copy
      </Button>
      <Snackbar
        open={open}
        color='success'
        autoHideDuration={3000}
        onClose={handleClose}
        message='Copied'
        action={action}
      />
    </div>
  );
}

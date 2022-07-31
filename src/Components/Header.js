import React from 'react';
import Typography from '@mui/material/Typography';
import { MdOutlineBookmarks } from 'react-icons/md';

export default function Header() {
  return (
    <div>
      <Typography variant='h2' align='center' sx={{ mt: 10 }}>
        CLICKABLES <MdOutlineBookmarks size={45} />
      </Typography>
      <Typography variant='h6' align='center'>
        Code snippets to make your life just a little bit easier :)
      </Typography>
    </div>
  );
}

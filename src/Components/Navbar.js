import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Drawer from './Drawer';
import { BsBookmarkHeart } from 'react-icons/bs';
import { useState } from 'react';

export default function ButtonAppBar() {
  const [drawer, setDrawer] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ background: '#774360', color: '#E7AB79', p:1 }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <BsBookmarkHeart />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Clickables
          </Typography>
          <Button
            onClick={() => {
              setDrawer(true);
            }}
            variant='outlined'
            color='inherit'
            sx={{ background: 'inherit' }}
          >
            How to use Clickables?
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer drawer={drawer} setDrawer={setDrawer}></Drawer>
    </Box>
  );
}

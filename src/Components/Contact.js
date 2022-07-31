import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import Typography from '@mui/material/Typography';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Link from '@mui/material/Link';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const actions = [
  {
    icon: (
      <Link
        href='https://iter8.netlify.app/'
        rel='noreferrer'
        target={'_blank'}
        underline='none'
        sx={{ lineHeight: 0 }}
      >
        <CgProfile color='#E7AB79' size={20} />
      </Link>
    ),
    name: 'Portfolio',
  },
  {
    icon: (
      <Link
        href='https://www.linkedin.com/in/ankit-sharma-561b291b0/'
        rel='noreferrer'
        target={'_blank'}
        underline='none'
        sx={{ lineHeight: 0 }}
      >
        <FiLinkedin color='#E7AB79' size={20} />
      </Link>
    ),
    name: 'Linkedin',
  },
  {
    icon: (
      <Link
        href='https://github.com/the-iter8'
        rel='noreferrer'
        target={'_blank'}
        underline='none'
        sx={{ lineHeight: 0 }}
      >
        <FiGithub color='#E7AB79' size={20} />
      </Link>
    ),
    name: 'Github',
  },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SpeedDial
        ariaLabel='SpeedDial basic example'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<Typography variant='subtitle2'>iter8</Typography>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

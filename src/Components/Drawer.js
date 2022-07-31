import Drawer from '@mui/material/Drawer';
import Steps from './Sub/Steps';

export default function TemporaryDrawer({ drawer, setDrawer }) {
  return (
    <Drawer
      anchor='left'
      open={drawer}
      onClose={() => {
        setDrawer(false);
      }}
    >
      <Steps></Steps>
    </Drawer>
  );
}

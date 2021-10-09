import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          Quiz App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

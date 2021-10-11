import './Header.scss';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Header() {
  return (
    <Toolbar className="header">
      <Typography variant="h6" component="div">
        Quiz App
      </Typography>
      <Button variant="contained" className="login-button">Login</Button>
    </Toolbar>
  );
}

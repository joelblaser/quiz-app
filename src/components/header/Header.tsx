import './Header.scss';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function Header() {
  const history = useHistory();

  const goToLogin = () => {
    if (history.location.pathname !== '/login') {
      history.push('/login');
    }
  };

  return (
    <Toolbar className="header">
      <Typography variant="h6" component="div">
        Quiz App
      </Typography>
      <Button variant="contained" className="login-button" onClick={goToLogin}>
        Login
      </Button>
    </Toolbar>
  );
}

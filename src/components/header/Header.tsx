import './Header.scss';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'src/hooks/useRouter';

export function Header() {
  const router = useRouter();

  const goToLogin = () => {
    router.navigate('/login');
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

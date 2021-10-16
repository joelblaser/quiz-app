import './Header.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'src/hooks/useRouter';
import { useAuth } from 'src/firebase/hooks/useAuth';

export function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const goToLogin = () => {
    router.navigate('/login');
  };

  const goToRegister = () => {
    router.navigate('/register');
  };

  const logoutUser = () => {
    logout().then(() => {
      goToLogin();
    });
  };

  return (
    <div className="header">
      <Typography variant="h5" component="div" className="title">
        Quiz App
      </Typography>
      {!user && (
        <Button variant="outlined" className="right-button" onClick={goToLogin}>
          Login
        </Button>
      )}
      {!user && (
        <Button
          variant="contained"
          className="right-button"
          onClick={goToRegister}
        >
          Register
        </Button>
      )}
      {user && (
        <Button
          variant="contained"
          className="right-button"
          onClick={logoutUser}
        >
          Logout
        </Button>
      )}
    </div>
  );
}

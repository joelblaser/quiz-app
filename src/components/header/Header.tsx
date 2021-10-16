import './Header.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'src/hooks/useRouter';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useState } from 'react';

export function Header() {
  const auth = getAuth();
  const router = useRouter();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    setIsUserLoggedIn(user ? true : false);
  });

  const goToLogin = () => {
    router.navigate('/login');
  };

  const goToRegister = () => {
    router.navigate('/register');
  };

  const logout = () => {
    signOut(auth).then(() => {
      goToLogin();
    });
  };

  return (
    <div className="header">
      <Typography variant="h5" component="div" className="title">
        Quiz App
      </Typography>
      {!isUserLoggedIn && (
        <Button variant="outlined" className="right-button" onClick={goToLogin}>
          Login
        </Button>
      )}
      {!isUserLoggedIn && (
        <Button
          variant="contained"
          className="right-button"
          onClick={goToRegister}
        >
          Register
        </Button>
      )}
      {isUserLoggedIn && (
        <Button variant="contained" className="right-button" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
}

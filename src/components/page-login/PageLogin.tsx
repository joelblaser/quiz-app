import './PageLogin.scss';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'src/hooks/useForm';
import { Auth } from 'src/models/auth.model';

export function PageLogin() {
  const auth = getAuth();

  const onLogin = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((value) => {
        console.log(value.user);
      })
      .catch((err) => {
        console.log(err);
      });
    clearForm();
  };

  const [user, handleChange, handleSubmit, clearForm] = useForm<Auth>(onLogin);

  return (
    <div className="page-login">
      <Card className="login-card">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={user.email || ''}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={user.password || ''}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}

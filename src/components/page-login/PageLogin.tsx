import './PageLogin.scss';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'src/hooks/useForm';
import { AuthRequest } from 'src/models/auth.model';
import { useRouter } from 'src/hooks/useRouter';
import { useAuth } from 'src/firebase/hooks/useAuth';

export function PageLogin() {
  const { login } = useAuth();
  const router = useRouter();

  const onLogin = () => {
    login(user)
      .then(() => {
        router.navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        clearForm();
      });
  };

  const [user, handleChange, handleSubmit, clearForm] =
    useForm<AuthRequest>(onLogin);

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

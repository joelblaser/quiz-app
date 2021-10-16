import './PageRegister.scss';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { useForm } from 'src/hooks/useForm';
import { useRouter } from 'src/hooks/useRouter';
import { Auth } from 'src/models/auth.model';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function PageRegister() {
  const auth = getAuth();
  const router = useRouter();

  const onRegister = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        router.navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        clearForm();
      });
  };

  const [user, handleChange, handleSubmit, clearForm] =
    useForm<Auth>(onRegister);

  return (
    <div className="page-register">
      <Card className="register-card">
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
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}

import { useForm } from '../../hooks/useForm';
import { Auth } from '../../models/auth.model';

export function SignUp() {
  const onSubmit = () => {
    console.log(user);
    clearForm();
  };

  const [user, handleChange, handleSubmit, clearForm] = useForm<Auth>(onSubmit);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

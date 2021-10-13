import { useHistory } from 'react-router-dom';

export function useRouter() {
  const history = useHistory();

  const navigate = (path: string): void => {
    if (history.location.pathname !== path) {
      history.push(path);
    }
  };

  return { navigate };
}

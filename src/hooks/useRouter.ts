import { useHistory } from 'react-router-dom';

interface Router {
  url: string;
  navigate: (path: string) => void;
}

export function useRouter(): Router {
  const history = useHistory();

  const navigate = (path: string): void => {
    if (history.location.pathname !== path) {
      history.push(path);
    }
  };

  return { url: history.location.pathname, navigate };
}

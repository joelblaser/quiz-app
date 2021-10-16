import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@firebase/auth';
import { useEffect, useState } from 'react';
import { AuthRequest } from 'src/models/auth.model';

interface Auth {
  user: User;
  login: (user: AuthRequest) => Promise<UserCredential>;
  register: (user: AuthRequest) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

export function useAuth(): Auth {
  const auth = getAuth();

  const [user, setUser] = useState<User | null>(null);

  const login = (user: AuthRequest) => {
    return signInWithEmailAndPassword(auth, user.email, user.password);
  };

  const register = (user: AuthRequest) => {
    return createUserWithEmailAndPassword(auth, user.email, user.password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data);
    });
    return unsubscribe;
  }, [auth]);

  return {
    user: user as User,
    login: login,
    register: register,
    logout: logout,
  };
}

import { useEffect, useState } from 'react';
import { collection, query } from 'firebase/firestore';
import { firestore } from '../app.firebase';
import { useQuery } from './useQuery';

export function useCollection<T>(name: string): T[] {
  const [q, setQuery] = useState(query(collection(firestore, name)));

  const data = useQuery<T>(q);

  useEffect(() => {
    setQuery(query(collection(firestore, name)));
  }, [name]);

  return data;
}

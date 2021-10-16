import { DocumentData, onSnapshot, Query } from '@firebase/firestore';
import { useEffect, useState } from 'react';

export function useQuery<T>(query: Query<DocumentData>): T[] {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query, (snapshot) => {
      const docs: T[] = [];
      snapshot.forEach((doc) => {
        docs.push(doc.data() as T);
      });
      setData(docs);
    });

    return unsubscribe;
  }, [query]);

  return data;
}

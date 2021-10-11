import { DocumentData, onSnapshot, Query } from '@firebase/firestore';
import { useEffect, useState } from 'react';

export function useQuery<T>(query: Query<DocumentData>) {
  const [data, setData] = useState<T>([] as unknown as T);

  useEffect(() => {
    const unsubscribe = onSnapshot(query, (snapshot) => {
      const docs: any[] = [];
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setData(docs as unknown as T);
    });

    return unsubscribe;
  }, [query]);

  return [data] as [T];
}

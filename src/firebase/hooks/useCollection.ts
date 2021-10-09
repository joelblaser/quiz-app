import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { firestore } from '../app.firebase';

export function useCollection<T>(name: string) {
  const [data, setData] = useState<T>([] as unknown as T);

  useEffect(() => {
    const q = query(collection(firestore, name));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs: any[] = [];
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      setData(docs as unknown as T);
    });

    return unsubscribe;
  }, [name]);

  return [data] as [T];
}

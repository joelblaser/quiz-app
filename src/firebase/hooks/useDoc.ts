import { doc, onSnapshot } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../app.firebase';

export function useDoc<T>(collection: string, id: string) {
  const [data, setData] = useState<T>(null as unknown as T);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(firestore, collection, id), (doc) => {
      setData(doc.data() as T);
    });

    return unsubscribe;
  }, [collection, id]);

  return data;
}

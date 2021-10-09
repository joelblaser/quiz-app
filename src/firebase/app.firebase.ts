import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/firebase.config';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);

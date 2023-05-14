import  { initializeApp,cert } from 'firebase-admin/app';
import  { getFirestore} from 'firebase-admin/firestore';

import  serviceAccount from './serviceAccount.json'

interface ServiceAccount {
  projectId?: string | any;
  clientEmail?: string | any;
  privateKey?: string | any;
}
initializeApp({
  credential:cert(<ServiceAccount>serviceAccount)
});

const db = getFirestore()

export default db
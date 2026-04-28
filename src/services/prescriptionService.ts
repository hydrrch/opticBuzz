import { db, auth, handleFirestoreError, OperationType } from './firebase';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { Prescription } from '../types';

export const PrescriptionService = {
  async uploadPrescription(prescription: Omit<Prescription, 'id' | 'createdAt' | 'verified'>) {
    if (!auth.currentUser) throw new Error('User not authenticated');
    
    const path = 'prescriptions';
    try {
      const docRef = await addDoc(collection(db, path), {
        ...prescription,
        userId: auth.currentUser.uid,
        verified: false,
        createdAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  async getUserPrescriptions() {
    if (!auth.currentUser) return [];
    
    const path = 'prescriptions';
    try {
      const q = query(
        collection(db, path),
        where('userId', '==', auth.currentUser.uid)
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Prescription));
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
    }
  }
};

import { db, auth, handleFirestoreError, OperationType } from './firebase';
import { collection, addDoc, query, where, getDocs, serverTimestamp, orderBy } from 'firebase/firestore';
import { Order } from '../types';

export const OrderService = {
  async placeOrder(order: Omit<Order, 'id' | 'createdAt' | 'status' | 'userId'>) {
    if (!auth.currentUser) throw new Error('User not authenticated');
    
    const path = 'orders';
    try {
      const docRef = await addDoc(collection(db, path), {
        ...order,
        userId: auth.currentUser.uid,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  async getUserOrders() {
    if (!auth.currentUser) return [];
    
    const path = 'orders';
    try {
      const q = query(
        collection(db, path),
        where('userId', '==', auth.currentUser.uid),
        orderBy('createdAt', 'desc')
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
    }
  }
};

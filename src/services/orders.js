import { doc, getDoc } from 'firebase/firestore'
import { firestoreDb } from './firebase'

export const getOrderById = async (id) => {
    const docSnapshot = await getDoc(doc(firestoreDb, 'orders', id))

    return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
        date: docSnapshot.data().date.toDate()
    }
}
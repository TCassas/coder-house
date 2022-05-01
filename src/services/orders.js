import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from './firebase'

export const getOrderById = async (id) => {
    const docSnapshot = await getDoc(doc(firestoreDb, 'orders', id))

    return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
        date: docSnapshot.data().date.toDate()
    }
}

export const getOrdersByEmail = async (email) => {
    const collectionRef = query(collection(firestoreDb, 'orders'), where('buyer.email', '==', email))
    const querySnapshot = await getDocs(collectionRef)

    return querySnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id,
            date: doc.data().date.toDate()
        }
    })
}
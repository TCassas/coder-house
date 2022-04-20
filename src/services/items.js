import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from './firebase'

export const GetItems = async (genre) => {
    const collectionRef = genre ? 
        query(collection(firestoreDb, 'products'), where('genres', 'array-contains', genre)) :
        collection(firestoreDb, 'products')
    
    const querySnapshot = await getDocs(collectionRef)

    const items = querySnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

    return items
}
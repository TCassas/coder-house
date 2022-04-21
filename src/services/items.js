import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
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

export const getItemById = async (id) => {
    const docSnapshot = await getDoc(doc(firestoreDb, 'products', id))

    return {
        id: docSnapshot.id,
        ...docSnapshot.data()
    }
}

export const GetItemsByAuthor = async(author) => {
    const collectionRef = query(collection(firestoreDb, 'products'), where('author', '==', author))
    
    const querySnapshot = await getDocs(collectionRef)

    const items = querySnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

    return items   
}
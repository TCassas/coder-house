import { collection, doc, getDoc, getDocs, query, where, addDoc } from 'firebase/firestore'
import { firestoreDb } from './firebase'

export const getItems = async (genre) => {
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

export const getItemsByAuthor = async(author) => {
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

export const insertOrderAndUpdateStocks = async (order) => {

    const orderCollection = collection(firestoreDb, 'orders')

    const newDocId = await addDoc(orderCollection, order)

    return newDocId.id
}
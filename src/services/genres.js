import { collection, getDocs } from 'firebase/firestore'
import { firestoreDb } from './firebase'

export const getGenres = async () => {
    const collectionRef = collection(firestoreDb, 'genres')

    const querySnapshot = await getDocs(collectionRef)

    return querySnapshot.docs.map(doc => doc.data().name)
}
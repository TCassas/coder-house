import { collection, addDoc, query, where, Timestamp, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { getItemById } from './items'
import { firestoreDb } from './firebase'

export const addLike = async (uid, itemId) => {
    const searchLike = await alradyLiked(uid, itemId)
    if(!searchLike) {
        const likeRef = collection(firestoreDb, 'likes')
        const { id } = await addDoc(likeRef, {
            userId:  uid,
            itemId: itemId,
            date: Timestamp.fromDate(new Date())
        })

        return { id, message: "Like saved" }
    } else {
        await deleteDoc(doc(firestoreDb, "likes", searchLike.id))

        return { message: "Removed from likes"}
    }

}

export const alradyLiked = async (uid, itemId) => {
    const docSnapshot = query(collection(firestoreDb, 'likes'), where('userId', '==', uid), where('itemId', '==', itemId))
    const likes = await getDocs(docSnapshot)

    if(likes.docs.length > 0) {
        return {
            id: likes.docs[0].id
        }
    } else {
        return false
    }
}

export const getLikedItems = async (uid) => {
    const likedItems = []
    const docSnapshot = query(collection(firestoreDb, 'likes'), where('userId', '==', uid))
    const likes = await getDocs(docSnapshot)

    if(likes.docs.length === 0) return likedItems

    for(let like of likes.docs) {
        likedItems.push(await getItemById(like.data().itemId))
    }

    return likedItems
}
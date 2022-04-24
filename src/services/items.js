import { collection, doc, getDoc, getDocs, query, where, writeBatch, documentId, Timestamp, addDoc } from 'firebase/firestore'
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
    const ids = order.cart.map(item => item.id)
    
    //Get docs from database and format them
    const itemsRef = collection(firestoreDb, 'products')
    const querySnapshot = await getDocs(query(itemsRef, where(documentId(), 'in', ids)))
    const docs = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id, ref: doc.ref }
    })

    //Validate that every item has enough stock before the order is created
    const itemsWithNoStock = order.cart.filter(item => {
        return item.quantity > (docs.find(doc => doc.id === item.id).stock)
    })
    
    //If there are no items in the cart with no stock, write batch
    if(itemsWithNoStock.length === 0) {
        const batch = writeBatch(firestoreDb)

        docs.forEach(doc => {
            const orderQuantity = order.cart.find(item => item.id === doc.id).quantity
            
            batch.update(doc.ref, { stock: doc.stock -  orderQuantity})
        })
        batch.commit()

        //Add timestamp to the order
        const orderRef = collection(firestoreDb, 'orders')
        const { id } = await addDoc(orderRef, {
            ...order,
            date: Timestamp.fromDate(new Date())
        })

        return Promise.resolve(id)
    } else {
        return Promise.reject({
            reason: 'STOCK',
            description: itemsWithNoStock.map(item => item.name)
        })
    }
}
import { useState, createContext, useEffect } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebase'

export const UserContext = createContext({ email: null, username: null})

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setIsLoggedIn(true)
                setUser(user)
            } else {
                setIsLoggedIn(false)
            }
        })

        try {
            if(JSON.parse(localStorage.getItem('user'))) {
                setUser(JSON.parse(localStorage.getItem('user')))
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    const loginWithEmailAndPassword = async (email, password) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)

        return userCredentials
    }

    const registerWithEmailAndPassword = async (email, password) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        
        return userCredentials
    }

    const logout = async () => {
        await signOut(auth)
        setUser({})
    }

    return (
        <UserContext.Provider value={{
            loginWithEmailAndPassword,
            registerWithEmailAndPassword,
            user,
            logout,
            isLoggedIn
        }}
        >
            { children }
        </UserContext.Provider>
    )
}


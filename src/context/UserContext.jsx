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

        if(userCredentials.user) {
            const user = { email: userCredentials.user.email, username: userCredentials.user.email.substring(0, userCredentials.user.email.indexOf('@')) }
            setUser(user)

            localStorage.setItem('user', JSON.stringify(user))
        }

        return userCredentials
    }

    const registerWithEmailAndPassword = async (email, password) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        if(userCredentials.user) {
            const user = { email: userCredentials.user.email, username: userCredentials.user.email.substring(0, userCredentials.user.email.indexOf('@')) }
            setUser(user)

            localStorage.setItem('user', JSON.stringify(user))
        }
        
        return userCredentials
    }

    const logout = async () => {
        await signOut(auth)
        localStorage.removeItem('user')
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


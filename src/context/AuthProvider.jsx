import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    
    const logOut = () => {
        return signOut(auth);
    }

    const  manageUser =  (name, photo)=>{

        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            if(loggedUser){
                axios.post('https://summer-camp-sandy.vercel.app/jwt',{email:loggedUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        user,
        signIn,
        googleSignIn,
        manageUser,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
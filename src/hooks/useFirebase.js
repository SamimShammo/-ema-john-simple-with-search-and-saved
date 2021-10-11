import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import initilaizeAuthentication from '../firebase/firebase.init';

initilaizeAuthentication();
const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] =useState({})
    const [error, setError] =useState('')
    const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
          
    }
    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
        })
    }, [])

   const logout = () => {
    signOut(auth)
    .then(() => {
          setUser()
      })
      .catch((error) => {
       setError(error.message)
      });
   }
   const submitHandler = e => {
      e.preventDefault()
   }
     
 
    return {
        setError,
        setUser,
        auth,
        user,
        error,
        logout,
        submitHandler,
        signInUsingGoogle
    }

}

export default useFirebase;
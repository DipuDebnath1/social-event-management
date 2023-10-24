import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";


export const Context = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    //email Register 
    const register = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    //update profile 
    // const updateProfile = (name,imgLink) =>{
    //     return updateProfile(auth.currentUser, {
    //         displayName: {name}, photoURL: {imgLink}
    //       })
    // }
    const updateInfo = (name,img) =>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: img
        })
    }
    //email password Login 
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //google login 
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }
    // check current user 
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        });
        return () => {
            unSubscribe()
        }

    }, [])

    //  LogOutUser 

    const logOut = () => {
        return signOut(auth)
    }


    // console.log(user);
    const authInfo = {
        register,
        login,
        googleLogin,
        logOut,
        updateInfo,
        user,
        loader

    }

    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;
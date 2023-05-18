import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  
} from "firebase/auth";
import app from "../Firebase/firebase";
export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const [loading, setLoading] = useState(true)
  const createRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const createLogin = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createLogOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  const createGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createRegister,
    createLogin,
    loading,
    createLogOut,
    createGoogle
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

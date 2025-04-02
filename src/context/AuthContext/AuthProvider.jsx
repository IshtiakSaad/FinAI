// src/context/AuthProvider.jsx
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        console.log("🔥 Auth state changed:", currentUser);
        setUser(currentUser);
    //   console.log(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logoutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

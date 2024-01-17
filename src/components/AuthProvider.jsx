import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const userSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const authInfo = {
    users,
    createUser,
    userSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase";
import { createContext, useState } from "react";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPrividers = ({ children }) => {
const [user,setUser] = useState(null)

    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPrividers;
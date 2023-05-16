import { getAuth } from "firebase/auth";
import app from "../firebase/firebase";
import { createContext, useState } from "react";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthPrividers = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPrividers;
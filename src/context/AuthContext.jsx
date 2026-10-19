import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return (savedUser && savedUser !== "undefined") ? JSON.parse(savedUser) : null;
    });

    function login(userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    }

    function logout() {
        localStorage.removeItem("user");
        setUser(null);
    }

    return (
        <>
            <AuthContext.Provider value={{user, login, logout}}>
                {children};
            </AuthContext.Provider>
        </>
    )
}

export function useUserContext() {
    return useContext(AuthContext);
}
import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    useEffect(()=>{
        try {
            localStorage.setItem("user", JSON.stringify(user))
        }catch{
            localStorage.removeItem("user");
            console.log('User removido')
        }
        
    }, [user])

    const contextValue = {
        user,
        Login(params){
            setUser(params)
        },
        Logout(){
            setUser(null);
        },
        isLogged(){
            return !!user;
        }
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

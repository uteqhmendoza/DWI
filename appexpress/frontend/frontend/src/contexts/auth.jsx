
import { useState,createContext,useContext, useCallback } from "react";

function AuthProvider( props) {
    const [usuario, setUsuario] = useState();
    
    const iniciarSesion = useCallback(async ({email, password}) => {
         
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email : email , password : password})
        };

        fetch('http://localhost:3000/api/login',requestOptions )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsuario({ username : email , password : password});
        } );

        
    },[]);

    return (
        <AuthContext.Provider value={{usuario,iniciarSesion}} {...props}  />
      );
}
const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

export {AuthProvider,useAuth}

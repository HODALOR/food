import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUserData, login } from "../functions/login";

export const AuthContext = createContext();

export default function AuthcontextProvider(props) {
  const [authContextDAta, setAuthContextData] = useState({
    
  });

  
  return (
    <AuthContext.Provider
      value={{
        authContextDAta,
       
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

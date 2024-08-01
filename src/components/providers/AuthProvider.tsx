import { PropsWithChildren, useState } from "react";
import { createContext } from "react";

export interface IAuthContext {
  token: string | null;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children } : PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

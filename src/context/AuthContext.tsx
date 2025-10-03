"use client";

import { IUserSession } from "@/interfaces/IUserSession";
import { createContext, useContext, useEffect, useState } from "react";

//Defino Interfaz que define los valores
interface AuthContextProps {
  dataUser: IUserSession | null | undefined;
  setDataUser: (dataUser: IUserSession | null) => void;
  logout: () => void;
}

//Esto si es la creacion del context y la definicion de sus valores iniciales
const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactElement;
}

//Crear nuestro componente de AuthProvider, encargado de manejar estados, etc
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<IUserSession | null | undefined>(
    undefined
  );

  //Lógica que controlaré con useEffect (1 o 2 )
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    }
  }, [dataUser]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const dataUser = localStorage.getItem("userSession");
      if (dataUser) {
        setDataUser(JSON.parse(dataUser));
      } else {
        setDataUser(null);
      }
    }
  }, []);

  //Métodos disponibles
  const logout = () => {
    setDataUser(null);
    localStorage.removeItem("cart");
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("userSession");
    }

    window.location.href = "/";
  };
  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

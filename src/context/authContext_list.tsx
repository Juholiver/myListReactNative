import React, {createContext, useContext} from "react";
import { Alert } from "react-native";

export const AuthContextList:any = React.createContext({})

export const AuthProviderList = (props:any):any => {

  const onOpen = () => {
    alert("Open modal to add a new item or edit existing ones.");
  };

  return (
    <AuthContextList.Provider value={{onOpen}}>
      {props.children}
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);
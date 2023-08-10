import {createContext, useState} from 'react'


 export const FirebaseContext = createContext(null)

 export const AuthContext = createContext(null)


 export function Context({children}){
   const[user,setuser]=useState('hello')
   return(
    <AuthContext.Provider value={{user,setuser}}>
        {children}
    </AuthContext.Provider>
   )
 }
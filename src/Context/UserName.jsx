import { createContext,useState } from "react";




const UserName = createContext()

   const Hello = ({children}) =>{


    const[user, setUser] = useState("Mech Code")
 
    return(

      <UserName.Provider value={{user,setUser}}>
{children}
      </UserName.Provider>
  
    )
   }



export {UserName, Hello};
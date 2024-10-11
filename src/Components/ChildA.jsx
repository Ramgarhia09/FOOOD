import React, { useContext } from 'react'
import { UserName } from '../Context/UserName';

const ChildA = () => {

    const {user, setUser }= useContext(UserName);
  return (

         <div style={{
                        border:"2px solid green",padding:"10px"
                     }}>

                        <h1>Hey i am child</h1>
                        <p>my name is {user}</p>
                       
<button onClick={()=>
    setUser("NOOOL")
}>CN</button>
                       
                     </div>
  )}
export default ChildA;
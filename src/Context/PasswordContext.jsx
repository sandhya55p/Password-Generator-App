import React, { Children, createContext, useState } from 'react'

export const PasswordContext=createContext();

export const PasswordProvider=({children})=>{
 const [password,setPassword]=useState("");
 const [history,setHistory]=useState([]);
 const [length,setLength]=useState(12);
 const [uppercase, setUppercase] = useState(true);
 const [lowercase, setLowercase] = useState(true);
 const [numbers, setNumbers] = useState(true);
 const [symbols, setSymbols] = useState(false);



  return (
    <PasswordContext.Provider 
     value={{
     password,
     setPassword,
     history,
     setHistory,
     length,
     setLength,
     uppercase,
     setUppercase,
     lowercase,
     setLowercase,
     numbers,
     setNumbers,
     symbols,
     setSymbols,

     }}
    >
    {children}
    </PasswordContext.Provider>
  )
}

export default PasswordContext

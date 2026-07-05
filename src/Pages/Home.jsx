import React from 'react'
import { useContext } from 'react';
import PasswordContext from '../Context/PasswordContext';

const Home = () => {
  const {
    
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
    
  } = useContext(PasswordContext);

function generatePassword(){
  
 let characters="";
 
 if(uppercase){
   characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

 }
 if(lowercase){
characters= characters+"abcdefghijklmnopqrstuvwxyz"
 }
 if(symbols){
 characters= characters+"!@#$%^&*()"
 }
 if(numbers){
  
characters= characters+"0123456789"
 }
 if (characters === "") {
        alert("Please select at least one option.");
        return;
    }
 let newPassword = "";

 for(let i=0;i<length;i++){
  let randomIndex = Math.floor(Math.random() * characters.length);

    newPassword += characters[randomIndex];
 }

 setPassword(newPassword)
 setHistory((prevHistory) => [...prevHistory, newPassword]);
}

const copyPass=()=>{
  if (!password) {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(password);
    alert("Password Copied Successfully!");
}


  return (
    <div
  style={{
    width: "450px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid gray",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    backgroundColor: "#f8f8f8",
  }}
>

    


      <div
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  }}
>
  <input
    type="text"
    value={password}
    readOnly
    style={{
      flex: 1,
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid gray",
    }}
  />

  <button 
  onClick={()=>copyPass(password)}
    style={{
      padding: "10px 15px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#007BFF",
      color: "white",
    }}
  >
    Copy
  </button>
</div>

<div
  style={{
    marginBottom: "20px",
  }}
>
  <h3>Password Length : {length}</h3>

  <input
    type="range"
    min="4"
    max="30"
    value={length}
    onChange={(e) => setLength(e.target.value)}
    style={{
      width: "100%",
      cursor: "pointer",
    }}
  />
</div>

   <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  }}
>

    <label
  style={{
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
  }}
>Include Uppercase : <input
    type="checkbox"
    checked={uppercase}
    onChange={(e) => setUppercase(e.target.checked)}
/></label>
<br/>
    <label
  style={{
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
  }}
>Include Lowercase: 
      <input
    type="checkbox"
    checked={lowercase}

    onChange={(e)=>setLowercase(e.target.checked)}
    
    />

    </label>
<br/>
   <label
  style={{
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
  }}
>
      Include Symbols:
<input
    type="checkbox"
    checked={symbols}
    onChange={(e) => setSymbols(e.target.checked)}
/>
    </label>
    <br/>
   <label
  style={{
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
  }}
>
Include Numbers :
      <input
    type="checkbox"
    checked={numbers}
    onChange={(e) => setNumbers(e.target.checked)}
/>
    
    
    </label>
    </div>
<br/>
       <div
  style={{
    textAlign: "center",
    marginBottom: "20px",
  }}
>
  <button
  onClick={generatePassword}
    style={{
      width: "100%",
      padding: "12px",
      fontSize: "18px",
      backgroundColor: "green",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Generate Password
  </button>
</div>
<div
  style={{
    textAlign: "center",
  }}
>
  <h3>Password Strength</h3>

  <p
    style={{
      color: "red",
      fontWeight: "bold",
      fontSize: "18px",
    }}
  >
    Weak
  </p>
</div>
    </div>
  )
}

export default Home

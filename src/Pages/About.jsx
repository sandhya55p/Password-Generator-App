import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "650px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        backgroundColor: "#f8f8f8",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d6efd"
        }}
      >
        About Password Generator
      </h1>

      <hr />

      <h2>Version</h2>

      <p>1.0</p>

      <h2>Developer</h2>

      <p>Sandhya Pawar</p>

      <h2>Built With</h2>

      <ul>
        <li>React JS</li>
        <li>useState</li>
        <li>useContext</li>
        <li>useEffect</li>
        <li>React Router</li>
      </ul>

      <h2>Features</h2>

      <ul>
        <li>Generate Secure Password</li>
        <li>Copy Password</li>
        <li>Password History</li>
        <li>Delete Password</li>
        <li>Clear History</li>
        <li>Password Length Slider</li>
        <li>Uppercase Letters</li>
        <li>Lowercase Letters</li>
        <li>Numbers</li>
        <li>Symbols</li>
      </ul>

    </div>
  );
};

export default About;
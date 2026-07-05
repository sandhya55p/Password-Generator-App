import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0d6efd",
        padding: "15px 30px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      
      <h2
        style={{
          color: "white",
          margin: 0,
          fontFamily: "Arial",
        }}
      >
        🔐 Password Generator
      </h2>

      
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "white",
              color: "#0d6efd",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🏠 Home
          </button>
        </Link>

        <Link to="/History" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "white",
              color: "#0d6efd",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📜 History
          </button>
        </Link>

        <Link to="/About" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "white",
              color: "#0d6efd",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ℹ️ About
          </button>
        </Link>

        <Link to="/Setting" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "white",
              color: "#0d6efd",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ⚙️ Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
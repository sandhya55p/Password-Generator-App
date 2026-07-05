import React from "react";
import { useContext } from "react";
import PasswordContext from "../Context/PasswordContext";

const History = () => {

  const { history, setHistory } = useContext(PasswordContext);

  const copyPassword = (pass) => {

    navigator.clipboard.writeText(pass);

    alert("Password Copied Successfully!");

}
const clearHistory = () => {
    setHistory([]);
}
  return (

    <div
      style={{
        width: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f8f9fa",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333"
        }}
      >
        Password History
      </h1>

      {
        history.length === 0 ?

          (
            <h3
              style={{
                textAlign: "center",
                color: "gray"
              }}
            >
              No Password Generated Yet
            </h3>
          )

          :

          history.map((pass, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid lightgray",
                borderRadius: "8px",
                backgroundColor: "white"
              }}
            >

              <div>

                <h3
                  style={{
                    margin: "0px"
                  }}
                >
                  Password {index + 1}
                </h3>

                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#007BFF"
                  }}
                >
                  {pass}
                </p>

              </div>

              <div>

                <button
                onClick={()=>copyPassword(pass)}
                  style={{
                    padding: "8px 12px",
                    marginRight: "10px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#28a745",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Copy
                </button>

                <button
                  style={{
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>

              </div>

            </div>

          ))
      }

      <div
        style={{
          textAlign: "center",
          marginTop: "20px"
        }}
      >

        <button
        onClick={clearHistory}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ff9800",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Clear History
        </button>

      </div>

    </div>

  );
};

export default History;
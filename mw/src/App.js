import React from "react";
import "./styles.css";
import Login from "./components/login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/dashboard";

export default function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}

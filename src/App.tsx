import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  useEffect(() => {
    document.title = "PRDT";
  }, []);
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;

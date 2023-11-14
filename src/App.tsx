import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./_components/navBar/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

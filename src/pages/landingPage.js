import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import logo from "../logo.svg";
import "../App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo h-12" alt="logo" />
        <p className="font-bold mt-12 text-5xl">A squatting platform </p>
        <p className="w-96 mt-3 text-lg">
          This platform allows people to accommodate others for an agreed period
          of time..
        </p>
        <button
          type="button"
          title="Sign Up"
          className="bg-red-500 text-xl h-12 px-8 mt-12 rounded font-bold cursor-pointer"
          onClick={() => navigate(NonAuthRoutes.signUp)}
        >
          SIGN UP NOW!
        </button>
      </header>
    </div>
  );
}

export default App;
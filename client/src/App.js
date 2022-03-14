import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/register" component={ RegisterPage } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
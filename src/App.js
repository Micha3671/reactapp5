// App.js
import React from "react";
import userData from "./UserData";
import UserComponent from "./UserComponent";
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import { FaBeer } from "react-icons/fa";

import "./App.css";
import "./styles/Variables.css";

function App() {
  const randomIndex = Math.floor(Math.random() * userData.length);
  const randomUser = userData[randomIndex];

  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* Übergeben Sie die Benutzerdaten an die Content-Komponente */}
      <Content userData={userData} />
      <Footer />
      <div id="randomUserContainer">
        <UserComponent user={randomUser} />
      </div>
      <h3>
        Lets go for a <FaBeer />! Or two?
      </h3>
    </div>
  );
}

export default App;

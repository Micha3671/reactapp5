// App.js
import React from "react";
import userData from "./userData"; // Annahme: Ihre Daten befinden sich in einer Datei namens 'userData.js'
import UserComponent from "./UserComponent"; // Annahme: Ihre Benutzerkomponente befindet sich in einer Datei namens 'UserComponent.js'
import Navbar from "./components/layout/navbar/Navbar";
import Header from "./components/layout/header/Header";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import { FaBeer } from "react-icons/fa";

// Import der CSS-Dateien
import "./App.css";
import "./styles/Variables.css";

function App() {
  // Nehmen Sie an, dass Sie einen zufälligen Benutzer aus den Daten auswählen
  const randomIndex = Math.floor(Math.random() * userData.length);
  const randomUser = userData[randomIndex];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <Footer />
      <div id="randomUserContainer">
        {/* Anzeige der zufälligen Benutzerkomponente */}
        <UserComponent user={randomUser} />
      </div>
      <h3>
        Lets go for a <FaBeer />! Or two?
      </h3>
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
import "./App.css";
import "./styles/Variables.css";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import { FaBeer } from "react-icons/fa";
import database from "./utils/DatabaseResponse.js";

// Zugriff auf die Datenbank
console.log(database);

const randomIndex = Math.floor(Math.random() * database.length);
const randomUser = database[randomIndex];

const randomUserContainer = document.getElementById("randomUserContainer");
randomUserContainer.textContent = `Name: ${randomUser.name}, Alter: ${randomUser.age}, E-Mail: ${randomUser.email}`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="randomUserContainer"></div>
      <Header />
      <Content />
      <Footer />
      <h3>
        Lets go for a <FaBeer />! Or two?
      </h3>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

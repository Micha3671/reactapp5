// import logo from "./logo.svg";
import "./App.css";
import "./CommonStyles.css";
import "./styles/Variables.css";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Under construction</h1>
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

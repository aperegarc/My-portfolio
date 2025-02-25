import logo from "./logo.svg";
import "./App.css";
import Readme from "./Readme/Readme";
import Menu from "./menu/Menu";
import AboutMe from "./AboutMe/AboutMe";
import Github from "./github/github";


function App() {
  return (
    <>
      <header><Menu /></header>
      <div className="componente"><Readme /></div>
      <div className="componente"><AboutMe /></div>
      <div className="componente" id="github-projects"><Github /></div>
    </>
  );
}

export default App;

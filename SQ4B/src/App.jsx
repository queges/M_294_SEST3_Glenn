import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Buttons";
import "./button.css";
import "./components/Auswertung";
import "./components/Frage";
import "./components/kategorieauswahl";
import "./pages/Impressum";
import "./pages/Spiel";
import "./pages/Spielregeln";
 
function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h1>Willkommen zum WISS-Quiz</h1>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <Button />
        <Button />
        <Button />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
 
export default App;
 
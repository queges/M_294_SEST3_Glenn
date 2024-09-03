import { Routes, Route } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Spielregeln from "./pages/Spielregeln";
import { useState } from "react";
import Spiel from "./pages/Spiel";
import Home from "/src/Home";
import Layout from "/src/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Spiel" element={<Spiel />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="spielregeln" element={<Spielregeln />} />
      </Route>
    </Routes>
  );
}

export default App;

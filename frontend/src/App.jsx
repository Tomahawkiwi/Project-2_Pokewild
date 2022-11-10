import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import CombatSelection from "./pages/Combat_selection";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/combat" element={<CombatSelection />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

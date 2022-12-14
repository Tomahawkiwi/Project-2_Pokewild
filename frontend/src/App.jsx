import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CombatSelection from "./pages/Combat_selection";
import PokedexList from "./components/Pokedex/PokedexList";
import PokedexDetails from "./pages/PokedexDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/pokedex" element={<PokedexList />} />
          <Route path="/pokedex/:id" element={<PokedexDetails />} />
          <Route path="/combat" element={<CombatSelection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

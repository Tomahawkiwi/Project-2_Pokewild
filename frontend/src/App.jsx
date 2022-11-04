import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PokedexPage from "./pages/Pokedex";
import CombatSelection from "./pages/Combat_selection";

function App() {
  return (
    <Layout>
      <Home />
      <PokedexPage />
      <CombatSelection />
    </Layout>
  );
}

export default App;

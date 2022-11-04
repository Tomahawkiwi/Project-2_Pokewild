import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PokedexPage from "./pages/Pokedex";
import Pokedex from "./pages/Pokedex/Pokedex";
import PokedexList from "./pages/Pokedex/PokedexList";

function App() {
  return (
    <Layout>
      <Home />
      <PokedexPage />
    </Layout>
  );
}

export default App;

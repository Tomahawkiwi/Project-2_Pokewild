import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex/Pokedex";
import PokedexList from "./pages/Pokedex/PokedexList";

function App() {
  return (
    <Layout>
      <Home />
      <PokedexList />
      <Pokedex />
    </Layout>
  );
}

export default App;

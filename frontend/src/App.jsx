import "./App.css";
import Layout from "./components/Layout";
import Pokedex from "./pages/Pokedex/Pokedex";
import PokedexList from "./pages/Pokedex/PokedexList";

function App() {
  return (
    <Layout>
      <PokedexList />
      <Pokedex />
    </Layout>
  );
}

export default App;

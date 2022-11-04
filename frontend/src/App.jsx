import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PokedexPage from "./pages/Pokedex";

function App() {
  return (
    <Layout>
      <Home />
      <PokedexPage />
    </Layout>
  );
}

export default App;

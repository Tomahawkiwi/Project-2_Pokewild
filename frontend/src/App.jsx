import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Combat from "./pages/Combat";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  return (
    <Layout setCurrentPage={setCurrentPage}>
      {currentPage === "HOME" && <Home />}
      {currentPage === "POKEDEX" && <Pokedex />}
      {currentPage === "COMBAT" && <Combat />}
    </Layout>
  );
}

export default App;

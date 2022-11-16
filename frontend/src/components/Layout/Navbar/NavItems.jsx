import { Link } from "react-router-dom";

export default function NavItems() {
  return (
    <div className="hidden md:flex space-x-40 mr-10">
      <Link to="/pokedex">Pokedex</Link>

      <Link to="/combat">Combat</Link>
    </div>
  );
}

// import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
// import PropTypes from "prop-types";

// ajout {children} en props

export default function Layout() {
  // const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="w-screen relative flex flex-col justify-between items-center align-middle min-h-screen">
      <Navbar />
      {/* ajout {children} quand navbar ok */}
      <Footer />
    </div>
  );
}

// index.jsx.PropTypes = {
//   isMenu: PropTypes.bool.isRequired,
//   setIsMenu: PropTypes.bool.isRequired,
// };

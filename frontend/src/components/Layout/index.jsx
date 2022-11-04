import PropTypes from "prop-types";
import Footer from "./Footer";

// ajout {children} en props

export default function Layout({ children }) {
  return (
    <div className="w-screen relative flex flex-col justify-start items-center align-middle h-screen">
      {/* // ajout navbar quand ok */}
      {/* ajout {children} quand navbar ok */}
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.string.isRequired,
};

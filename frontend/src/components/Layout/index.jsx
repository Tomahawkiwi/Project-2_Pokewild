import Footer from "./Footer";

// ajout {children} en props

export default function Layout({ children }) {
  return (
    <div className="w-screen flex flex-col justify-between items-center align-middle h-screen">
      {/* // ajout navbar quand ok */}
      {children}
      <Footer />
    </div>
  );
}

import Footer from "./Footer";

// ajout {children} en props

export default function Layout() {
  return (
    <div className="w-screen relative flex flex-col justify-start items-center align-middle h-screen">
      {/* // ajout navbar quand ok */}
      {/* ajout {children} quand navbar ok */}
      <Footer />
    </div>
  );
}

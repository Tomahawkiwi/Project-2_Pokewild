import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
  return (
    <div className="w-screen relative flex flex-col justify-between items-center align-middle min-h-screen text-customDarkGrey cursor-default">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

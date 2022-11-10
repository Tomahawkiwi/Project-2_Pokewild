import React from "react";
import { bgGradLightGrey } from "../tools/constants";
import About from "../components/Home/About";
import Flames from "../components/Home/Flames";
import HomeButtons from "../components/Home/HomeButtons";
import TitleImg from "../components/Home/TitleImg";
import Wilder from "../components/Home/Wilder";

export default function Home() {
  return (
    <div className={`${bgGradLightGrey} w-full h-full z-0`}>
      <div>
        <TitleImg />
        <HomeButtons />
        <About />
        <Wilder />
        <Flames />
      </div>
    </div>
  );
}

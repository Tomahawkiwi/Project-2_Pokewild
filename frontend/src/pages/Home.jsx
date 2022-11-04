import React from "react";
import { bgGradLightGrey } from "../tools/constants";
import About from "../components/Home-comp/About";
import Flames from "../components/Home-comp/Flames";
import HomeButtons from "../components/Home-comp/HomeButtons";
import TitleImg from "../components/Home-comp/TitleImg";
import Wilder from "../components/Home-comp/Wilder";

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

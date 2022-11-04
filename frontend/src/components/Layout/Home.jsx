import React from "react";
import { bgGradLightGrey } from "../../tools/constants";
import About from "../Home-comp/About";
import Flames from "../Home-comp/Flames";
import HomeButtons from "../Home-comp/HomeButtons";
import TitleImg from "../Home-comp/TitleImg";
import Wilder from "../Home-comp/Wilder";

export default function Home() {
  return (
    <div className={`${bgGradLightGrey} w-full h-full`}>
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

import React from "react";

function ArrowUnderPv() {
  return (
    <div className="relative">
      <div className="absolute w-[120px] h-[16.5px] bg-customDarkGrey-lighter rounded-bl-lg" />
      <div className="absolute left-[119.5px] h-[16.5px] w-[23.5px] overflow-hidden">
        <div className="w-[30px] h-5 bg-customDarkGrey-lighter transform rotate-[35deg] origin-top-left absolute left-[0px]" />
      </div>
    </div>
  );
}

export default ArrowUnderPv;

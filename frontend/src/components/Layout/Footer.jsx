import { bgGradLightRed } from "../../tools/constants";

export default function Footer() {
  return (
    <div
      className={`${bgGradLightRed} w-full flex flex-col justify-between items-center align-middle font-Rajdhani text-white md:flex-row-reverse lg:flex-col lg:items-end`}
    >
      <div className="md:flex md:space-x-7 md:mr-10 lg:mb-0.5 lg:mt-7">
        <h3 className="font-Silkscreen text-xl my-6 lg:my-0">FOLLOW US!</h3>
        <div className="flex items-center justify-center space-x-3.5">
          <a href="https://youtube.com/">
            <img
              className="w-7"
              src="src/assets/footer/youtube_logo.png"
              alt="Youtube logo"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              className="w-7"
              src="src/assets/footer/instagram_logo.png"
              alt="Instagram logo"
            />
          </a>
          <a href="https://www.twitter.com/">
            <img
              className="w-7"
              src="src/assets/footer/twitter_logo.png"
              alt="Twitter logo"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-3.5 md:space-x-10 lg:space-x-28 text-xs mt-14 mb-3 md:ml-10 lg:mx-auto lg:mt-0 lg:mb-3">
        {/* TODO : ADD NAV LINKS */}
        <a href="/">Legal mentions</a>
        <a href="/">CGU</a>
        <p>TEMM - 2022</p>
      </div>
    </div>
  );
}

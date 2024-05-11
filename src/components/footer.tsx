import { PiLinkedinLogoThin } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { IoMdContact } from "react-icons/io";
import { FaPhoenixFramework } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { commonArgs } from "../configs/types";
import Wave from "react-wavify";
import { PiTelegramLogoLight } from "react-icons/pi";
function Footer(props: commonArgs) {
  const buttonSize =
    "h-10 sm:h-12 w-10 sm:w-12 m-2 bg-blue-700 rounded-full p-2.5";
  return (
    <div className="w-full">
      <Wave
        fill="#FFA500"
        className="mt-10 border-gray-400"
        // paused={false}
        style={{ display: "flex" }}
        options={{
          height: 70,
          amplitude: 20,
          speed: 0.17,
          points: 3,
        }}
      ></Wave>{" "}
      <footer className={`text-center bg-white dark:bg-neutral-800`}>
        <Wave
          fill="rgb(38 38 38)"
          className="-mt-12 border-gray-400"
          // paused={false}
          style={{ display: "flex" }}
          options={{
            height: 8,
            amplitude: 20,
            speed: 0.14,
            points: 4,
          }}
        ></Wave>
        <div className="flex justify-center px-1 pb-5 bg-neutral-800 text-white">
          <PiLinkedinLogoThin className={` bg-blue-700 ${buttonSize}`} />
          <VscGithubAlt className={` bg-gray-700 ${buttonSize}`} />
          <IoMdContact className={` bg-green-700 ${buttonSize}`} />
          <PiTelegramLogoLight className={` bg-fuchsia-700 ${buttonSize}`} />
          <FaPhoenixFramework className={` bg-red-700 ${buttonSize}`} />
          <SiReaddotcv className={` bg-purple-700 ${buttonSize}`} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;

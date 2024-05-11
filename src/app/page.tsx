import { IoMdContact } from "react-icons/io";
import { FaUniversity, FaPhoenixFramework } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { PiCodesandboxLogoThin } from "react-icons/pi";
import { useLang } from "../hooks/langHook";
import { homePage } from "../configs/site";
import pic from "../assets/pic.png";
const boxStyle =
  "rounded-lg sm:shadow-xl shadow-lg bg-gradient-to-tl from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-900 transform hover:-translate-y-0.5 transition duration-400 ease-in-out md:hover:shadow-2xl hover:shadow-xl";

export default function HomePage() {
  const { lang } = useLang();
  let textlang = homePage.find((item) => item.lang === lang);
  if (!textlang) {
    textlang = homePage[0];
  }

  return (
    <div className="relative dark:text-white">
      <div className="flex flex-col justify-between">
        <div className="flex flex-wrap justify-center sm:mt-10 w-full gap-4">
          <div
            className={`flex p-4 sm:p-8 w-10/12 sm:w-auto h-auto justify-center mt-12 sm:mt-0 ${boxStyle}`}
          >
            <img src={pic} alt="Personal Portfolio" className={`rounded-md`} />
          </div>
          <div className="grid grid-cols-12 w-10/12 sm:w-auto gap-4">
            <div className={`col-span-full p-6 ${boxStyle}`}>
              <div className="user-info-header flex items-start flex-col">
                <p className="text-gray-900 dark:text-white">
                  {textlang.title}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {textlang.subtitle}
                </p>
              </div>
              <div className="flex flex-col mt-12">
                {textlang.skills.map((item, index) => (
                  <a
                    href={item.url}
                    target="_blank"
                    className="info flex items-center"
                    rel="noreferrer"
                    key={index}
                  >
                    <item.icon className="h-6 w-6 m-2 text-gray-900 dark:text-white" />
                    <span className="text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`col-span-full p-6 rounded-lg shadow-xl ${boxStyle}`}
            >
              <div className="flex justify-end">
                <a
                  href="/login"
                  className={`mr-5 p-4 text-md rounded-md shadow-md hover:shadow-xl dark:text-white`}
                >
                  <span>{textlang.cvButton}</span>
                </a>
                <a
                  href="/about"
                  className={`p-4 rounded-md shadow-md hover:shadow-xl dark:text-white`}
                >
                  <span>{textlang.contactButton}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a href="/#/project">
            <PiCodesandboxLogoThin className="h-12 w-12 m-2 bg-yellow-500 rounded-full p-2 text-white" />
          </a>
          <a href="/#/about">
            <IoMdContact className="h-12 w-12 m-2 bg-green-700 rounded-full p-2 text-white" />
          </a>
          <a href="/#/education">
            <FaUniversity className="h-12 w-12 m-2 bg-yellow-700 rounded-full p-2 text-white" />
          </a>
          <a href="/#/blog">
            <FaPhoenixFramework className="h-12 w-12 m-2 bg-red-700 rounded-full p-2 text-white" />
          </a>
          <a href="/#/resume">
            <SiReaddotcv className="h-12 w-12 m-2 bg-purple-700 rounded-full p-2 text-white" />
          </a>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </div>
  );
}

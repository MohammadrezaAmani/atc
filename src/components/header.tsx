import Wave from "react-wavify";
import { useState, useEffect, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { CiDark, CiLight } from "react-icons/ci";
import { PiTranslate } from "react-icons/pi";
import { useTheme } from "../hooks/themeHook";
import { useLang } from "../hooks/langHook";
import Logo from "./logo";
import { getMenuItems } from "../configs/site";
import { langs } from "../configs/langs";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.body.scrollTop;
    setShowShadow(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerDirection =
    langs[lang as keyof typeof langs].dir === "rtl" ? "right-0" : "left-0";

  return (
    <div
      className={`fixed w-full bg-white dark:bg-neutral-800 bg-blend-saturation ${
        showShadow ? " shadow-md " : ""
      } z-10`}
    >
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-4">
            <Logo slug={"/"} />
            <div className="hidden md:flex items-center space-x-4">
              <nav>
                <ul className="flex space-x-4 rtl:space-x-reverse">
                  {getMenuItems(lang).map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.slug}
                        className="font-medium text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}

                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <PiTranslate
                      className="w-6 h-6 dark:text-cyan-500 cursor-pointer"
                      onClick={toggleLang}
                    />
                    {theme === "light" ? (
                      <CiDark
                        className="w-6 h-6 cursor-pointer"
                        onClick={toggleTheme}
                      />
                    ) : (
                      <CiLight
                        className="w-6 h-6 text-yellow-400 cursor-pointer"
                        onClick={toggleTheme}
                      />
                    )}
                  </div>
                </ul>
              </nav>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <RiMenu4Line className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-hidden bg-neutral-700 bg-opacity-50 backdrop-blur-md transition-opacity duration-300 shadow-lg ${
          drawerOpen ? "" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      >
        <div className="flex justify-end h-full">
          <div
            ref={drawerRef}
            className={`w-auto bg-white dark:bg-neutral-800 transform transition-transform duration-300 ease-in-out ${drawerDirection} ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <Wave
                  fill="#FFA500"
                  className="border-gray-400 dark:text-gray-100 rotate-180"
                  // paused={false}
                  style={{ display: "flex" }}
                  options={{
                    height: 5,
                    amplitude: 10,
                    speed: 0.2,
                    points: 5,
                  }}
                ></Wave>
                <Wave
                  fill="#FFFA00"
                  className="-mt-40 border-gray-400 dark:text-neutral-500 rotate-180"
                  // paused={false}
                  style={{ display: "flex" }}
                  options={{
                    height: 10,
                    amplitude: 10,
                    speed: 0.14,
                    points: 4,
                  }}
                ></Wave>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex p-4 pt-10 justify-center">
                  <div className="">
                    {getMenuItems(lang).map((item, index) => (
                      <a
                        href={item.slug}
                        className="flex flex-row font-vazir py-2 px-1 space-x-2 rtl:space-x-reverse"
                      >
                        <item.icon className="w-5 h-5 text-xs text-slate-600 dark:text-white" />
                        <p className="text-slate-600 dark:text-white">
                          {item.text}{" "}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mb-4 p-5 text-slate-600 dark:text-white">
                <PiTranslate
                  className="w-6 h-6 dark:text-cyan-500"
                  onClick={toggleLang}
                />
                {theme === "light" ? (
                  <CiDark className="w-6 h-6" onClick={toggleTheme} />
                ) : (
                  <CiLight
                    className="w-6 h-6 text-yellow-400"
                    onClick={toggleTheme}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

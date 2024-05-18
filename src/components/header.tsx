import { useState, useEffect, useRef } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "../hooks/themeHook";
import Logo from "./logo";

const Header = () => {
  // const [drawerOpen, setDrawerOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
        // setDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`fixed w-full bg-white dark:bg-neutral-800 bg-blend-saturation bg-opacity-85 ${
        showShadow ? " shadow-md " : ""
      } z-10`}
    >
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-4">
            <Logo slug={"/"} />
            <div className="flex flex-row justify-between items-center space-x-2 space-x-reverse">
              <p className="text-gray-800 dark:text-white">رقابتی برای تسلط بر بازار‌ها</p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse sm:px-0 px-5">
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
            </div>
            {/* <div className="hidden md:flex items-center space-x-4">
              <nav>
                <ul className="flex space-x-4 rtl:space-x-reverse">
                  {menuItems.map((item, index) => (
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
            </div> */}
          </div>
        </div>
      </header>
      {/*

      <div
        className={`fixed inset-0 z-40 overflow-hidden bg-neutral-700 bg-opacity-50 backdrop-blur-md transition-opacity duration-300 shadow-lg ${
          drawerOpen ? "" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      >
        <div className="flex justify-end h-full">
          <div
            ref={drawerRef}
            className={`w-3/5 bg-white dark:bg-neutral-800 transform transition-transform duration-300 ease-in-out${drawerDirection} ${
              drawerOpen ? "-translate-x-0" : "-translate-x-full"
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
                <div className="flex flex-col p-4 pt-10 justify-center">
                  {menuItems.map((item, index) => (
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
              <div className="flex flex-row justify-between mb-4 p-5 text-slate-600 dark:text-white">
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
      </div> */}
    </div>
  );
};

export default Header;

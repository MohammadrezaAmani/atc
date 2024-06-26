import { IoReturnUpBackOutline } from "react-icons/io5";

import { dataType } from "../configs/types";
import { BaseUri } from "../configs/site";
import { useTheme } from "../hooks/themeHook";

export function DataDetails({ slug, data }: dataType) {
  const { theme } = useTheme();
  slug = slug.split(":")[0];

  const containerClass = theme === "light" ? "bg-white" : "bg-neutral-800";
  const textColorClass = theme === "light" ? "text-gray-500" : "text-gray-400";
  const linkColorClass = theme === "light" ? "text-blue-500" : "text-blue-300";
  const iconColorClass = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <div className="mx-4 p-4">
      <div
        className={`max-w-3xl mx-auto mt-8 ${containerClass} shadow-md rounded-lg overflow-hidden`}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex flex-col">
              <div className="flex items-center ">
                <img src={data.logo} alt="logo" className="w-16 h-auto mr-4" />
                <h5 className={`mb-1 ${textColorClass}`}>{data.title}</h5>
              </div>
              <p className={`text-sm ${textColorClass}`}>{data.created_at}</p>
            </div>
            <div className="flex-grow"></div>
            <div>
              <a
                href={BaseUri + slug}
                className={`hover:underline ${linkColorClass}`}
              >
                <IoReturnUpBackOutline
                  className={`w-6 h-6 ${iconColorClass}`}
                />
              </a>
            </div>
          </div>
          <img
            src={data.image}
            alt="data"
            className="w-full mb-4 rounded-lg h-auto"
          />
          <p className={`mb-4 ${textColorClass}`}>{data.description}</p>
          <div
            className={`bg-gray-100 dark:bg-gray-400 rounded-lg shadow-md my-3 p-4 w-full ${textColorClass}`}
          >
            {data.data}
          </div>
        </div>
        <div className="flex flex-wrap px-4 space-x-1 rtl:space-x-reverse space-y-1 pb-5">
          {data.tags.map((tag, index) => (
            <div key={index}>{"#" + tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

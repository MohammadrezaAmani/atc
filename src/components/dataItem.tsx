import { BaseUri } from "../configs/site";
import { dataType } from "../configs/types";
import { useTheme } from "../hooks/themeHook";

export const DataItem: React.FC<dataType> = ({ data, slug }) => {
  const { theme } = useTheme();
  const containerClass = theme === "light" ? "shadow-lg" : "shadow-dark";
  const textColorClass = theme === "light" ? "text-black" : "text-white";
  const bgColorClass = theme === "light" ? "bg-white" : "bg-neutral-800";

  return (
    <div
      id={`data-item-${data.slug}`}
      className={`${containerClass} rounded-sm p-6 ${bgColorClass}`}
    >
      <a href={BaseUri + slug + "/" + data.slug} className="block w-full">
        {data.image !== "" && (
          <div className="h-48 w-full ">
            <img
              src={data.image}
              alt={data.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        )}
        <div className="flex justify-between mt-4">
          <h6 className={`text-xl font-bold ${textColorClass}`}>
            {data.title}
          </h6>
          <p className={`text-xs ${textColorClass}`}>{data.updated_at}</p>
        </div>
        <p className={`mt-2 ${textColorClass}`}>{data.description}</p>
      </a>
      <div className="mt-2 flex flex-row flex-wrap space-x-1 w-full">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className={`p-1 rounded-md dark:bg-gray-700 bg-gray-200 rtl:space-x-reverse space-x-2 text-sm font-thin`}
          ></span>
        ))}
      </div>
    </div>
  );
};

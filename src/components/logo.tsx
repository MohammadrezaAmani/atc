import { commonArgs } from "../configs/types";
import { siteConfig } from "../configs/site";

function Slug(props: commonArgs) {
  return (
    <a
      href={props.slug}
      className={`font-sacramento text-2xl text-black dark:text-white`}
    >
      {siteConfig.title}
    </a>
  );
}

export default Slug;

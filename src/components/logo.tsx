import { commonArgs } from "../configs/types";
import logo from "../assets/atclogo.png";

function Slug(props: commonArgs) {
  return (
    <a
      href={props.slug}
      className={`font-sacramento text-2xl text-black dark:text-white`}
    >
      <img src={logo} alt="ATC" className={`h-auto w-16`} />
    </a>
  );
}

export default Slug;

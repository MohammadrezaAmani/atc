import { commonArgs } from "../configs/types";
import logo from "../assets/atclogo.png";

function Logo(props: commonArgs) {
  return (
    <a
      href={props.slug}
    >
      <img src={logo} alt="ATC" className={`h-auto w-20`} />
    </a>
  );
}

export default Logo;

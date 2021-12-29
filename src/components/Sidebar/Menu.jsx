import { VscHome } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col ">
        <li>
          <NavLink
            to={"/"}
            activeClassName="bg-active !text-white"
            exact
            className="h-10 flex items-center text-sm font-semibold gap-x-4 text-link hover:text-white px-4 rounded"
          >
            <VscHome className="text-xl" />
            Ana Sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            activeClassName="bg-active !text-white"
            className="h-10 flex items-center text-sm font-semibold gap-x-4 text-link hover:text-white px-4 rounded"
          >
            <BsSearch className="text-xl" />
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            activeClassName="bg-active !text-white"
            className="h-10 flex items-center text-sm font-semibold gap-x-4 text-link hover:text-white px-4 rounded"
          >
            <ImBooks className="text-xl" />
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

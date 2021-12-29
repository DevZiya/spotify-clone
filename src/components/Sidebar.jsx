import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import PlayList from "./Sidebar/PlayList";
import { AiFillPlusSquare } from "react-icons/ai";
import { TiHeart } from "react-icons/ti";
import Download from "./Sidebar/Download";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.player.sidebar);

  return (
    <div className="w-60 pt-6 flex flex-col flex-shrink-0 bg-black">
      <a href="#" className="px-6 mb-7">
        <img src={logo} alt="" className="h-10" />
      </a>

      <Menu />

      <div className="mt-6">
        <ul className="px-5 py-2 flex flex-col gap-3 group">
          <li className="flex font-semibold text-sm items-center cursor-pointer gap-2 rounded-sm text-link hover:text-white">
            <AiFillPlusSquare className="w-6 h-6" />
            Çalma Listesi Oluştur
          </li>
          <li className="flex font-semibold text-sm items-center cursor-pointer gap-2 rounded-sm text-link hover:text-white">
            <TiHeart className="w-6 h-6 bg-gradient-to-br from-purple-700 to to-blue-300" />
            Beğenilen Şarkılar
          </li>
        </ul>
      </div>

      <PlayList />
      <Download />

      {sidebar && <SidebarCover />}
    </div>
  );
};

export default Sidebar;

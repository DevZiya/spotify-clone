import { useDispatch, useSelector } from "react-redux";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {setSidebar} from '../../redux/Player'

const SidebarCover = () => {
  const current = useSelector((state) => state.player.current);
  const dispatch= useDispatch()
  return (
    <div className="pt-[100%] relative bg-black group">
      <img
        src={current.img}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="flex items-center w-6 h-6 justify-center cursor-pointer opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.1] rounded-full absolute top-1 right-1  bg-black "
      >
        <MdKeyboardArrowDown className="text-xl" />
      </button>
    </div>
  );
};

export default SidebarCover;

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  return (
    <div className="icons flex gap-x-3 w-full">
      <div className="left bg-black rounded-full flex items-center justify-center w-8 h-8"
      onClick={()=>history.goBack()}
      >
        <MdOutlineKeyboardArrowLeft className="text-2xl cursor-pointer" />
      </div>
      <div className="right bg-black rounded-full flex items-center justify-center w-8 h-8"
      onClick={()=>history.goForward()}
      >
        <MdOutlineKeyboardArrowRight className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navigation;

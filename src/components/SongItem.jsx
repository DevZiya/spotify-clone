import { NavLink } from "react-router-dom";
import { BsPlayFill,BsPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../redux/Player";

const SongItem = ({ item }) => {

   const dispatch = useDispatch()
   const {current,playing,controls} = useSelector(state=>state.player)
   

    const imgStyled = item => {
        if(item.type === 'artist'){
            return 'rounded-full'
        }else if(item.type === 'podcast'){
            return 'rounded-xl'
        }else{
            return 'rounded'
        }
      };

      const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)

  return (
    <NavLink
      to={"/"}
      key={item.id}
      className={"bg-footer rounded p-4 hover:bg-active group"}
    >
      <div className="relative pt-[100%] mb-4">
        <img
          src={item.img}
          alt=""
          className={`w-ful h-full inset-0 absolute rounded object-cover ${imgStyled(
            item
          )}`}
        />
        <button
        onClick={updateCurrent}
        className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${!isCurrentItem ? 'hidden' : 'flex'}`}>
          {isCurrentItem ? <BsPauseFill className="text-xl" /> : <BsPlayFill className="text-xl" />}
        </button>
      </div>
      <h4 className="font-semibold text-white">{item.title}</h4>
      <span className="text-link text-sm mt-1 line-clamp-2">{item.desc}</span>
    </NavLink>
  );
};

export default SongItem;

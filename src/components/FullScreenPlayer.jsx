import { useSelector } from "react-redux"
import { BiPlay, BiPause } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { secondsToTime } from "../Utils";
import { IoIosShuffle } from "react-icons/io";
import { BsSpotify } from "react-icons/bs";
import {
  MdSkipPrevious,
  MdSkipNext
} from "react-icons/md";
import CustomRange from "../components/CustomRange";


const FullScreenPlayer = ({toggle,state,controls,audio,volumeIcon}) => {
   const {current} = useSelector(state=>state.player)


    return (
        <div className="h-full relative">
            <div  className="absolute inset-0 bg-cover bg-center object-cover blur-md opacity-30" style={{backgroundImage:`url(${current.img})`}}></div>
            <div className="absolute top-8 left-10 flex items-center gap-x-3 text-white">
                <BsSpotify className="text-3xl opacity-50" />
                <div className="text-sm opacity-50">
                    <p className="text-[10px]">PLAYING FROM PLAYLIST</p>
                    <h3 className="">{current.title}</h3>
                </div>
            </div>
            <div className="absolute bottom-36 left-10  flex items-center gap-x-4">
                <img src={current?.img} alt=""  className="w-24 h-24 object-cover"/>
                <div className="self-end">
                    <h3 className="text-3xl font-semibold ">{current.title}</h3>
                    <p className="text-sm font-medium opacity-50">{current.description}</p>
                </div>
            </div>
            <div className="w-full absolute bottom-4 flex flex-col items-center pt-2  px-8">
        <div className="w-full flex items-center mb-1.5 gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
           <div className="flex items-center gap-x-5">
          <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
            <IoIosShuffle className="text-2xl" />
          </button>
          <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
            <MdSkipPrevious className="text-2xl" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="flex items-center w-12 h-12 justify-center text-black bg-white rounded-full hover:scale-[1.06]"
          >
            {state?.playing ? (
              <BiPause className="text-4xl" />
            ) : (
              <BiPlay className="text-4xl" />
            )}
          </button>
          <button className="flex items-center  w-8 h-8justify-center text-white text-opacity-70 hover:text-opacity-100">
            <MdSkipNext className="text-2xl" />
          </button>
          <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BsArrowRepeat className="text-2xl" />
          </button>
        </div>
        <div className="flex items-center gap-x-4 absolute right-4 bottom-3">
           <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          {volumeIcon}
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <button 
        onClick={toggle}
        className="flex items-center w-10 h-10 justify-center text-white text-opacity-70 hover:text-opacity-100">
          <AiOutlineFullscreenExit className="text-2xl" />
        </button>
           </div>
      </div>
        </div>
    )
}

export default FullScreenPlayer

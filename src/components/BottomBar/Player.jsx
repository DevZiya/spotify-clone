import { IoIosShuffle } from "react-icons/io";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdQueueMusic,
  MdDevices,
  MdOutlinePictureInPictureAlt,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { BiPlay, BiPause } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { AiOutlineFullscreen, AiOutlineHeart } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import {
  ImVolumeMute,
  ImVolumeLow,
  ImVolumeMedium,
  ImVolumeHigh,
} from "react-icons/im";
import { useAudio } from "react-use";
import { secondsToTime } from "../../Utils";
import CustomRange from "../CustomRange";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls,setPlaying,setSidebar } from "../../redux/Player";

const Player = () => {
  const { current, sidebar } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(()=>{
      dispatch(setPlaying(state.playing))
    },[state.playing])

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return <ImVolumeMute className="text-xl" />;
    }
    if (state.volume > 0 && state.volume <= 0.33) {
      return <ImVolumeLow className="text-xl" />;
    }
    if (state.volume > 0.33 && state.volume < 0.66) {
      return <ImVolumeMedium className="text-xl" />;
    }

    return <ImVolumeHigh className="text-xl" />;
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between items-center h-full px-4">
      <div className="min-w-[11.25rem] w-[30%] flex items-center">
        <div className="flex items-center">
          {current && (
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                {!sidebar && (
                  <div className="w-14 h-14 mr-3 flex-shrink-0 relative group">
                    <img
                      src={current?.img}
                      alt=""
                      className="w-16 h-16 object-cover"
                    />
                    <button 
                    onClick={()=>dispatch(setSidebar(true))}
                    className="flex items-center w-6 h-6 justify-center cursor-pointer opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.1] rounded-full absolute top-1 right-1  bg-black ">
                      <MdKeyboardArrowUp className="text-xl" />
                    </button>
                  </div>
                )}
                <div>
                  <h5 className="text-sm line-clamp-1">{current.title}</h5>
                  <p className="text-[0.688rem] text-white text-opacity-70">
                    {current.artist}
                  </p>
                </div>
                <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <AiOutlineHeart className="text-xl" />
                </button>

                <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <MdOutlinePictureInPictureAlt className="text-xl" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center pt-2  px-4">
        <div className="flex items-center gap-x-2">
          <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
            <IoIosShuffle className="text-xl" />
          </button>
          <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
            <MdSkipPrevious className="text-xl" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="flex items-center w-8 h-8 justify-center text-black bg-white rounded-full hover:scale-[1.06]"
          >
            {state?.playing ? (
              <BiPause className="text-2xl" />
            ) : (
              <BiPlay className="text-2xl" />
            )}
          </button>
          <button className="flex items-center  w-8 h-8justify-center text-white text-opacity-70 hover:text-opacity-100">
            <MdSkipNext className="text-xl" />
          </button>
          <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
            <BsArrowRepeat className="text-xl" />
          </button>
        </div>
        <div className="w-full flex items-center mt-1.5 gap-x-2">
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
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
          <GiMicrophone className="text-xl" />
        </button>
        <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdQueueMusic className="text-xl" />
        </button>
        <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdDevices className="text-xl" />
        </button>
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
        <button className="flex items-center w-8 h-8 justify-center text-white text-opacity-70 hover:text-opacity-100">
          <AiOutlineFullscreen className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Player;

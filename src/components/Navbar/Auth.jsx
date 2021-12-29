import { Menu } from "@headlessui/react";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";
import {HiExternalLink} from 'react-icons/hi'

const Auth = () => {
  const user = {
    name: "Ziya Cəfərli",
    avatar:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg",
  };

  return (
    <Menu as={"nav"} className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button className={`flex items-center justify-center h-8 rounded-3xl ${open ? 'bg-active' : 'bg-black'} pr-2 hover:bg-active w-36`}>
            <img
              src={user.avatar}
              alt=""
              className="w-8 h-8 rounded-full p-0.5 mr-2"
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <button>
              {open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
            </button>
          </Menu.Button>
          <Menu.Items
            className={
              "w-48 absolute top-full right-0 flex flex-col rounded translate-y-2 px-1"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center justify-between text-sm rounded px-2 ${active && "bg-link"}`}
                  href="#"
                >
                  Account
                <HiExternalLink className="text-xl" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center text-sm rounded px-2 ${active && "bg-link"}`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center text-sm rounded px-2 ${active && "bg-link"}`}
                  href="#"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
            
      
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;

import { SocialIcon } from "react-social-icons";
import logo from "../images/icon.png";

export const TopMenu = () => {
  return (
    <nav className="text-xs p-2 bg-gray-100 border-b border-black text-black">
      <ul className="flex row justify-between items-center">
        <div className="flex-0 row justify-evenly items-center">
          <li>
            <a href="/">
              <img src={logo} alt="Company Logo" className="h-16 w-16" />
            </a>
          </li>
        </div>
        <div className="flex-1 hidden md:visible" />
        <div className="flex-1 flex row justify-evenly items-center">
          <a href="https://shop.seabrook-studios.com">
            <li className="hover:text-white hover:rounded-full h-12 w-12 flex justify-center items-center hover:bg-black">
              SHOP
            </li>
          </a>
          <a href="https://press.seabrook-studios.com" className="text-xs text-center">
            <li className="hover:text-white hover:rounded-full h-12 w-12 flex justify-center items-center hover:bg-black">
              PRESS
            </li>
          </a>
          <a
            href="https://drive.google.com/drive/u/1/folders/1aOLbeKWtyW5pn8C0-Q66NzlvGJfEYGqI"
            className="text-xs text-center"
          >
            <li className="hover:text-white hover:rounded-full h-12 w-12 flex justify-center items-center hover:bg-black">
              RULES
            </li>
          </a>
          <SocialIcon url="https://twitter.com/seabrookstudios" fgColor="white" bgColor="#222" />
          <SocialIcon url="https://discord.gg/3QDDYQzcrH" fgColor="white" bgColor="#222" />
          <li>
            <SocialIcon url="https://instagram.com/seabrookstudios/" fgColor="white" bgColor="#222" />
          </li>
          <li>
            <SocialIcon url="mailto:hello@seabrook-studios.com" fgColor="white" bgColor="#222" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

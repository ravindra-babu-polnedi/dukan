import "./index.css";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { PiSpeakerHigh } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdPayments, MdOutlineColorLens } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { HiOutlineBolt } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiNavigationArrow } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";

const data = [
  {
    text: "Home",
    icon: <GoHome className="icon-style" />,
  },
  { text: "Orders", icon: <LuClipboardList className="icon-style" /> },
  {
    text: "Products",
    icon: <AiOutlineAppstore className="icon-style" />,
  },
  { text: "Delivery", icon: <FiTruck className="icon-style" /> },
  { text: "Marketing", icon: <PiSpeakerHigh className="icon-style" /> },
  {
    text: "Analytics",
    icon: <TbBrandGoogleAnalytics className="icon-style" />,
  },
  { text: "Payments", icon: <MdPayments className="icon-style" /> },
  { text: "Tools", icon: <PiNavigationArrow className="icon-style" /> },
  { text: "Discounts", icon: <CiDiscount1 className="icon-style" /> },
  { text: "Audience", icon: <GoPeople className="icon-style" /> },
  {
    text: "Appearance",
    icon: <MdOutlineColorLens className="icon-style" />,
  },
  { text: "Plugins", icon: <HiOutlineBolt className="icon-style" /> },
];
const Navigation = () => {
  return (
    <div className="nav-container">
      <div>
        <div>
          <div className="top-container">
            <div className="nav-top-div"></div>
            <div className="side-div">
              <div>Nishyan</div>
              <div className="visit-store">Visit store</div>
            </div>
            <RiArrowDropDownLine className="drop-down" />
          </div>
          <ul className="nav-list-style">
            {data.map((item) => {
              return (
                <li
                  className={`nav-list-item ${
                    item.text === "Payments" ? "selected" : ""
                  }`}
                >
                  <div>{item.icon}</div>
                  <div className={`item-text`}>{item.text}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="nav-bottom-div">
        <div className="wallet-container">
          <CiWallet className="icon-style" style={{ fontSize: "2em" }} />
        </div>
        <div className="bottom-text-container">
          <div className="Available-credits">Available credits</div>
          <div>222.10</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

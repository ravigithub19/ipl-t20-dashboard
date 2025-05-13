import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import logo from "../components/images/ipl-logo-new-old.png";

import { useStateContext } from "../contexts/ContextProvider";
import { MdScore } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { GiGroundbreaker } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";
import { MdEventNote, MdTableChart } from "react-icons/md";
const links = [
  {
    links: [
      {
        name: "SCORE",
        route: "live-score",
        icon: <MdScore />,
      },
      {
        name: "POINTS TABLE",
        route: "points-table",
        icon: <MdTableChart />,
      },
      {
        name: "TEAMS",
        route: "teams",
        icon: <RiTeamFill />,
      },
      {
        name: "STADIUMS",
        route: "stadiums",
        icon: <GiGroundbreaker />,
      },
      {
        name: "RESULTS",
        route: "results",
        icon: <MdEmojiEvents />,
      },
      {
        name: "MATCHES",
        route: "matches",
        icon: <MdEventNote />,
      },
    ],
  },
];

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-3 pl-4 pt-1 pb-1.5 rounded-sm text-md w-full text-white font-bold bg-gray-800 m-2";
  const normalLink =
    "flex items-center gap-3 pl-4 pt-1 pb-1.5 rounded-sm text-md w-full text-gray-100 dark:text-gray-200 m-2 hover:bg-gray-800";

  return (
    <div className="flex h-screen text items-center align-end bg-transparent z-10000 w-[14rem]">
      <div
        className="pl-1 mt-16 h-[64vh] overflow-hidden bg-gradient-to-b from-blue-400 to-blue-900 mr-6 ml-0"
        style={{ paddingRight: "60px" }}
      >
        <div className="align-end items-end">
          <div className="flex justify-between items-center ">
            <Link
              to="/"
              className="items-center gap-3 ml-5 mt-6 flex text-xl font-extrabold tracking-tight text-white"
            >
              <img src={logo} alt="ipl" />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: "white" }}
                className="text-xl rounded-full p-8 hover:bg-gray-600 block lg:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="text-xs mt-6 font-semibold flex tracking-wide justify-end items-end align-bottom">
            {links.map((item, index) => (
              <div key={index}>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.route}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

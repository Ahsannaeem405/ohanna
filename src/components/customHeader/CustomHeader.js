import { Button } from "antd";
import { useLocation } from "react-router-dom";
import "./customHeader.css";
import {
  DownloadIcon,
  ShareIcon,
  SidebarIcon,
  SettingIcon,
  Dropdownicon,
  MenuIcon,
} from "../constants/Icons";

const CustomHeader = ({ title, icon, sideBarHandler, user }) => {
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  console.log("pathname:",pathName);

  return (
    <>
    {location.pathname === "/" || location.pathname === "/solved-issue"   || location.pathname === "/open-progress-issue" ? null : <section className="header-container">
        <section className="left">
          <section onClick={sideBarHandler} className="sidebar-icon">
            {MenuIcon}
          </section>
          <section className="">
            <Button className="dropdown-button">
              <section className="icon">
                {SettingIcon}
                <span>{pathName}</span>
              </section>
              <section className="dropdown-button_name">{Dropdownicon}</section>
            </Button>
          </section>
        </section>

        {pathName === "issue-management" && user && (
          <section className="welcome-text">Welcome back {user}!</section>
        )}

        <section className="right">
          <Button className="download-button">
            <section className="icon">{DownloadIcon}</section>
            <section>Download Report</section>
          </Button>

          <Button className="share-button">
            <section className="icon">{ShareIcon}</section>

            <section>Share Report</section>
          </Button>
        </section>
      </section>}
      
    </>
  );
};

export default CustomHeader;

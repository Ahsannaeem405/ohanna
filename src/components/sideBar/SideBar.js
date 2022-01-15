import { useState } from "react";
import {
  CareerDevelopmentPlanWhiteIcon,
  ChurnManagementWhiteIcon,
  EmployeesWhiteIcon,
  hierarchyWhiteIcon,
  IssueManagementWhiteIcon,
  OperationManagementWhiteIcon,
  TrainingManagementWhiteIcon,
} from "../constants/Icons";
import { UpMenu, DownMenu } from "../constants/Icons";
import SideBarButton from "./sidebarButton/SidebarButton";
import { useLocation } from "react-router";
import logo from "../../assets/images/LogoWhite.png";
import "./sideBar.css";
import SubMenuItem from "./submenuItem/subMenuItem";

const SideBar = ({ iconAndTitleHandle }) => {
  const location = useLocation();
  const pathName = location.pathname.substring(1);
  const [clickedTab, setClickedTab] = useState(pathName);

  const [workforceMenuItems, setWorkForceMenuItems] = useState(false);
  const [employeesMenuItems, setEmployeesMenuItems] = useState(false);

  const clickHandler = (name) => {
    setClickedTab(name);

    if (name === "workforce") setWorkForceMenuItems(!workforceMenuItems);
    if (name === "Employees") setEmployeesMenuItems(!employeesMenuItems);
  };
  return (
    <section className="sidebar-container">

      <section className="dashboard-text">Warehouse
      <div className="menu-icons">
        {UpMenu}
        {DownMenu}
      </div>
      </section>

      <SideBarButton
        iconAndTitleHandle={iconAndTitleHandle}
        clickHandler={clickHandler}
        clickedTab={clickedTab}
        icon={IssueManagementWhiteIcon}
        routerName="issue-management"
        name="Issue Management"
      />
      {
        pathName === "issue-management" || pathName === "solved-issue" || pathName === "open-progress-issue" ? 
        <>
        <SubMenuItem 
        path = {pathName}
        subRouter = "solved-issue"
        name = "solved issue"
        />
         <SubMenuItem 
        path = {pathName}
        subRouter = "open-progress-issue"
        name = "Open/ In Progress Issues"
        />
        </> 
        : 
        null
      }
      
      <SideBarButton
        iconAndTitleHandle={iconAndTitleHandle}
        clickHandler={clickHandler}
        clickedTab={clickedTab}
        icon={OperationManagementWhiteIcon}
        routerName="operation-management"
        name="Operation Management"
      />

      <SideBarButton
        iconAndTitleHandle={iconAndTitleHandle}
        clickHandler={clickHandler}
        clickedTab={clickedTab}
        icon={TrainingManagementWhiteIcon}
        routerName="training-management"
        name="Training Management"
      />

      <SideBarButton
        iconAndTitleHandle={iconAndTitleHandle}
        clickHandler={clickHandler}
        clickedTab={clickedTab}
        icon={ChurnManagementWhiteIcon}
        routerName="workforce"
        name="Churn Management"
      />

      <SideBarButton
        iconAndTitleHandle={iconAndTitleHandle}
        clickHandler={clickHandler}
        clickedTab={clickedTab}
        icon={CareerDevelopmentPlanWhiteIcon}
        routerName="career-development-plan"
        name="Career Development Plan"
      />

      <SideBarButton
        iconAndTitleHandle={iconAndTitleHandle}
        clickHandler={clickHandler}
        clickedTab={clickedTab}
        icon={hierarchyWhiteIcon}
        routerName="hierarchy"
        name="Hierarchy"
      />

      <SideBarButton
        iconAndTitleHandle={iconAndTitleHandle}
        clickHandler={clickHandler}
        clickedTab={clickedTab}
        icon={EmployeesWhiteIcon}
        routerName="Employees"
        name="Employees"
      />

      <img className="logo-image" src={logo} alt="logo" />
    </section>
  );
};

export default SideBar;

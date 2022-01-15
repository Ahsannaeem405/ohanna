
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IssueManagement from "./layout/issueManagement/IssueManagement";
import OperationManagement from "./layout/operationManagement/OperationManagement";
import TrainingManagement from "./layout/trainingManagement/TrainingManagement";
import Login from "./layout/login/Login";
import Workforce from "./layout/workforce/Workforce";
import Employees from "./layout/employees/Employees";
import OrganizationChart from "./layout/organizationChart/OrganizationChart";
import CustomHeader from "./components/customHeader/CustomHeader";
import SideBar from "./components/sideBar/SideBar";
import SolvedIssue from "./layout/solvedIssue/solvedIssue";
import OpenProgressIssue from "./layout/openProgressIssue/openProgressIssue";
import "antd/dist/antd.css";
import "./app.css";
import CareerDevelopmentPlan from "./layout/careerDevelopementPlan/CareerDevelopmentPlan";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [icon, setIcon] = useState();
  const [title, setTitle] = useState("");

  const sideBarHandler = () => {
    setShowSideBar(!showSideBar);
  };

  const iconAndTitleHandle = (icon, title) => {
    setIcon(icon);
    setTitle(title);
  };

  return (
    <Router>
      <section className={showSideBar ? "router" : "show-sidebar"}>
        <section className={showSideBar ? "" : "hide"}>
          <SideBar iconAndTitleHandle={iconAndTitleHandle} />
        </section>
        <section className="pages" >
           <CustomHeader
            sideBarHandler={sideBarHandler}
            icon={icon}
            title={title}
            user="Johns"
            hidden
          /> 
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/issue-management" element={<IssueManagement />} />
            <Route
              path="/operation-management"
              element={<OperationManagement />}
            />
            <Route
              path="/training-management"
              element={<TrainingManagement />}
            />
            <Route path="/workforce" element={<Workforce />} />
            <Route path="/employees" element={<Employees />} />
            <Route
              path="/career-development-plan"
              element={<CareerDevelopmentPlan />}
            />
            <Route
              path="/solved-issue"
              element={<SolvedIssue />}
            />
            <Route
              path="/open-progress-issue"
              element={<OpenProgressIssue />}
            />
            <Route path="/hierarchy" element={<OrganizationChart />} />
          </Routes>
        </section>
      </section>
    </Router>
  );
};

export default App;

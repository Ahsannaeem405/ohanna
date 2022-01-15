import React, { useState } from "react";
import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
import {
  CareerDevelopmentPlanWhiteIcon,
  ChurnManagementWhiteIcon,
  EmployeesWhiteIcon,
  IssueManagementWhiteIcon,
  OperationManagementWhiteIcon,
  TrainingManagementWhiteIcon,
} from "../constants/Icons";
import logo from "./../../assets/images/image.png";
import "./navBar.css";

const { Sider } = Layout;

const NavBar = () => {
  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };

  const { collapsed } = state;
  return (
    <Sider
      width="300px"
      className="sider"
      color="#331543"
      // collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <p className="dashboard-text">
        <Link to="/">Dashboard</Link>
      </p>
      <div className="logo" />
      <Menu
        className="menu-container"
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item
          className="menu-item"
          key="1"
          icon={IssueManagementWhiteIcon}
        >
          <Link to="/issue-management">Issue Management</Link>
        </Menu.Item>
        <Menu.Item
          className="menu-item"
          key="2"
          icon={OperationManagementWhiteIcon}
        >
          <Link to="/operation-management">Operation Management</Link>
        </Menu.Item>
        <Menu.Item
          className="menu-item"
          key="3"
          icon={TrainingManagementWhiteIcon}
        >
          <Link to="/training-management">Training Management</Link>
        </Menu.Item>

        <SubMenu
          className="sub-item"
          key="sub1"
          icon={ChurnManagementWhiteIcon}
          title="Workforce / Churn"
        >
          <Menu.Item key="4">
            <Link to="/workforce">Distance of Employee</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/workforce">Employee Risk Indicator</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className="sub-item"
          key="sub2"
          icon={EmployeesWhiteIcon}
          title="Employees"
        >
          <Menu.Item key="6">
            <Link to="/employees">Edit/Remove Employee</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          className="menu-item"
          key="7"
          icon={CareerDevelopmentPlanWhiteIcon}
        >
          <Link to="/career-development-plan">Career Development Plan</Link>
        </Menu.Item>
      </Menu>
      <section className="image-container">
        <img src={logo} className="image" alt="ohanna" />
      </section>
    </Sider>
  );
  // }
};

export default NavBar;

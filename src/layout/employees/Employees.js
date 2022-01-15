import { Card } from "antd";
import { AddFileButton } from "../../components/constants/Buttons";
import { Table } from "antd";
import { SeacrhIconLight } from "../../components/constants/Icons";
import { AddIconSmall, EditBlueIcon } from "../../components/constants/Icons";
import Popup from "reactjs-popup";

import "./employees.css";
import EditEmployeeInfo from "../../components/editEmployeeInfo/editEmployeeInfo";
const Employees = () => {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => text,
    },
    {
      title: "Manager Name",
      dataIndex: "managerName",
      key: "managerName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Credit",
      dataIndex: "credit",
      key: "credit",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = [
    {
      key: "1",
      fullName: "John Brown",
      managerName: "Tim South",
      phoneNumber: "(760) 123-4567",
      credit: "6",
      status: "Active",
      position: "Manager",
      action: "Edit",
    },
    {
      key: "2",
      fullName: "John Brown",
      managerName: "Tim South",
      phoneNumber: "(760) 123-4567",
      credit: "6",
      status: "Active",
      position: "Manager",
      action: "Edit",
    },
    {
      key: "3",
      fullName: "John Brown",
      managerName: "Tim South",
      phoneNumber: "(760) 123-4567",
      credit: "6",
      status: "Active",
      position: "Manager",
      action: "Edit",
    },
    {
      key: "4",
      fullName: "John Brown",
      managerName: "Tim South",
      phoneNumber: "(760) 123-4567",
      credit: "6",
      status: "Active",
      position: "Manager",
      action: "Edit",
    },
    {
      key: "5",
      fullName: "John Brown",
      managerName: "Tim South",
      phoneNumber: "(760) 123-4567",
      credit: "6",
      status: "Active",
      position: "Manager",
      action: "Edit",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <section className="employee-container">
      <section className="emloyee-searchbar">
        <section className="search-icons">{SeacrhIconLight}</section>
        <input type="search" placeholder="Search Employee" />
      </section>
      <div className="card-header-container">
        <section className="card-header">
          <section className="employees-listing">Employee Listing</section>
          <section className="empoyees-Add-Icon">Add {AddIconSmall}</section>
        </section>
        <section className="employee-card-body">
          <table className="employee-table">
            <tr>
              <th>Full Name</th>
              <th>Manager Name</th>
              <th>Phone Number</th>
              <th>Credits</th>
              <th>Status</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <Popup
                  modal
                  trigger={
                    <button className="edit-user">{EditBlueIcon}Eidit</button>
                  }
                >
                  {(close) => <EditEmployeeInfo close={close} />}
                </Popup>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="dactive-btn">Deactive</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="dactive-btn">Deactive</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="active-btn">Active</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
            <tr>
              <td>Mikal Jackson</td>
              <td>Tim Southi</td>
              <td>(760) 000-0000 </td>
              <td>6</td>
              <td>
                <button className="dactive-btn">Deactive</button>
              </td>
              <td>Lorem Ispum</td>
              <td>
                <button className="edit-user">{EditBlueIcon}Eidit</button>
              </td>
            </tr>
          </table>
        </section>
      </div>
    </section>
  );
};

export default Employees;

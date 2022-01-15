import { Card } from "antd";
import { AddFileButton } from "../../components/constants/Buttons";
import { Table } from "antd";

import "./employees.css";

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
    <section>
      <Card
        className="card-header-container"
        title={
          <section className="card-header">
            <section className="employees-listing">Employee Listing</section>
            <section className="add-file icon">{AddFileButton}</section>
          </section>
        }
        bordered={false}
      >
        <Table
          columns={columns}
          dataSource={data}
          align="center"
          onChange={onChange}
        />
      </Card>
    </section>
  );
};

export default Employees;

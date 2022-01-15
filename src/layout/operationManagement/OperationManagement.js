import CustomCard from "../../components/customCard/CustomCard";
import CustomColumn from "../../components/CustomColumn/CustomColumn";
import CustomHeadMap from "../../components/CustomHeatMap/CustomHeatMap";
import WorkloadGraph1 from "../../components/workloadGraph/workloadGraph";
import WorkloadGraph2 from "../../components/wordloadGraph2/wordloadGraph2";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { LightDropDown } from "../../components/constants/Icons";
import { Card, Table } from "antd";
import "./operationManagement.css";
import CustomAreaGraph from "../../components/customAreaGraph/CustomAreaGraph";
import GroupLineGraphs from "../../components/groupLineGraphs/GroupLineGraphs";
import { MoreOutlined } from "@ant-design/icons";

const IssueManagement = () => {
  const columns = [
    {
      title: "PO Number(s)",
      dataIndex: "poNum",
      key: "poNum",
      render: (text) => text,
    },
    {
      title: "Scheduled delivery",
      dataIndex: "schdate",
      key: "sch-date",
    },
    {
      title: "Delivery date",
      dataIndex: "delDate",
      key: "del-date",
    },
    {
      title: "Delivery time",
      dataIndex: "delTime",
      key: "del-time",
    },
    {
      title: "Unload finished time",
      dataIndex: "UnlFinTime",
      key: "U-F-time",
    },

    {
      title: "Checking finished date",
      dataIndex: "CFDate",
      key: "C-F-date",
    },
    {
      title: "Checking finished time",
      dataIndex: "CFtime",
      key: "CFtime",
    },
    {
      title: "Carrier",
      dataIndex: "Carrier",
      key: "Carrier",
    },
    {
      title: "Size of load",
      dataIndex: "SizeofLoad",
      key: "SizeofLoad",
    },
  ];

  const data = [
    {
      key: "1",
      poNum: "40145672",
      schdate: "29 Sep 2020",
      delDate: "1 Oct 2020",
      delTime: "12 pm ",
      UnlFinTime: "4 pm",
      CFtime: "4 pm",
      CFDate: "Oct 3  2020 ",
      Carrier: "STI truck",
      SizeofLoad: "2000 Case",
    },
    {
      key: "2",
      poNum: "STI-3025403",
      schdate: "29 Sep 2020",
      delDate: "1 Oct 2020",
      delTime: "12 pm ",
      UnlFinTime: "4 pm",
      CFtime: "4 pm",
      CFDate: "Oct 3  2020 ",
      Carrier: "STI truck",
      SizeofLoad: "2000 Case",
    },
    {
      key: "3",
      poNum: "TEMU0997345",
      schdate: "29 Sep 2020",
      delDate: "3 Oct 2020",
      delTime: "12 pm ",
      UnlFinTime: "4 pm",
      CFtime: "5 pm ",
      CFDate: "Oct 3  2020 ",
      Carrier: "STI truck",
      SizeofLoad: "2000 Case",
    },
    {
      key: "4",
      poNum: "TEMU0997345",
      schdate: "29 Sep 2020",
      delDate: "3 Oct 2020",
      delTime: "12 pm ",
      UnlFinTime: "4 pm",
      CFtime: "4 pm",
      CFDate: "Oct 3  2020 ",
      Carrier: "STI truck",
      SizeofLoad: "2000 Case",
    },
    {
      key: "5",
      poNum: "TEMU0997345",
      schdate: "29 Sep 2020",
      delDate: "1 Oct 2020",
      delTime: "12 pm ",
      UnlFinTime: "4 pm",
      CFtime: "4 pm",
      CFDate: "Oct 3  2020 ",
      Carrier: "STI truck",
      SizeofLoad: "2000 Case",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <section className="operation-management">
      <section>
        <CustomCard>
          <Card>
            <CustomHeadMap autoFit={true} value="Heatmap Of Movement "/>
          </Card>
        </CustomCard>
        <section className="selection-box-operations">
          <h2>Contribution of Operations </h2>
          <section className="select-operation-group">
            Select Group
            <div className="select-group-btn">
              <Button>Receiving/ Checking{LightDropDown}</Button>
              <Button>Group 1 {LightDropDown}</Button>
            </div>
          </section>
        </section>
        <section className="PO-numbers-table">
          <Card>
            <Table
              columns={columns}
              dataSource={data}
              align="center"
              onChange={onChange}
            />
          </Card>
        </section>
        <section className="columns workload">
          <Card>
            <WorkloadGraph1 />
          </Card>
          <Card>
            <WorkloadGraph2 />
          </Card>
        </section>
        <section className="columns operation-table">
          <Card>
            <section>
              <table>
                <tr>
                  <th>Note</th>
                  <th>Date</th>
                  <th></th>
                </tr>
                <tr>
                  <td className="table-item">
                    Workload issue
                    <div classs="table-details">
                      Two employees were on vacations Paul and Mustafa
                    </div>
                  </td>
                  <td>29/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>John Danial </td>
                  <td>30/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Robert Thomas</td>
                  <td>1/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="table-item">
                    Workload issue
                    <div classs="table-details">
                      Two employees were on vacations Paul and Mustafa
                    </div>
                  </td>
                  <td>29/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>John Danial </td>
                  <td>30/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Robert Thomas</td>
                  <td>1/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="table-item">
                    Workload issue
                    <div classs="table-details">
                      Two employees were on vacations Paul and Mustafa
                    </div>
                  </td>
                  <td>29/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>John Danial </td>
                  <td>30/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Robert Thomas</td>
                  <td>1/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="table-item">
                    Workload issue
                    <div classs="table-details">
                      Two employees were on vacations Paul and Mustafa
                    </div>
                  </td>
                  <td>29/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>John Danial </td>
                  <td>30/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Robert Thomas</td>
                  <td>1/10/2022</td>
                  <td className="note-icon">
                    <MoreOutlined />
                    <ul className="note-control">
                      <li>Delete</li>
                      <li>Edit</li>
                      <li>Close</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </section>
          </Card>
          <Card>
            <table className="matric-table">
              <tr>
                <th>Metrics</th>
                <th>Counts</th>
              </tr>
              <tr>
                <td>Total Delivered Loads </td>
                <td>450</td>
              </tr>
              <tr>
                <td>Total Received Loads </td>
                <td>150</td>
              </tr>
              <tr>
                <td>Total Loads to be Checked </td>
                <td>20</td>
              </tr>
              <tr>
                <td>Average Unloading Time</td>
                <td>1 Day</td>
              </tr>
              <tr>
                <td>Average Check-in Time</td>
                <td>2 Days</td>
              </tr>
              <tr>
                <td>Total number of carriers delayed </td>
                <td>5</td>
              </tr>
              <tr>
                <td>Average performance</td>
                <td>%71</td>
              </tr>
            </table>
          </Card>
        </section>
        {/* <section className="columns">
          <Card>
            <CustomAreaGraph />
          </Card>

          <Card>
            <GroupLineGraphs />
          </Card>
        </section> */}
        {/* <section className="columns">
          <Card>
            <Table
              columns={columns}
              dataSource={data}
              align="center"
              onChange={onChange}
            />
          </Card>
          <Card>
            <section className="select-group">
              <section className="select-group_title">Select Group</section>
              <section>
                <Dropdown overlay={menu}>
                  <Button>
                    Inventory Control <DownOutlined />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu}>
                  <Button>
                    Group 1 <DownOutlined />
                  </Button>
                </Dropdown>
              </section>
            </section>
            <CustomColumn />
          </Card>
        </section> */}
      </section>
    </section>
  );
};

export default IssueManagement;

import CustomCard from "../../components/customCard/CustomCard";
import CustomColumn from "../../components/CustomColumn/CustomColumn";
import CustomGroupColumn from "../../components/CustomGroupColumn/CustomGroupColumn";
import CustomHeadMap from "../../components/CustomHeatMap/CustomHeatMap";
import { Card, Table } from "antd";
import { Menu, Dropdown, Button, Select } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import "./issueManagement.css";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
const IssueManagement = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => text,
    },
    {
      title: "Date and Time",
      dataIndex: "dateAndTime",
      key: "dateAndTime",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Safety ( workforce injury)",
      dateAndTime: "29 Sep 2020, 10:32 AM",
      location: "L-03-09",
    },
    {
      key: "2",
      name: "Roof damage",
      dateAndTime: "29 Sep 2020, 10:32 AM",
      location: "A-04-11",
    },
    {
      key: "3",
      name: "Inventory accuracy",
      dateAndTime: "29 Sep 2020, 10:32 AM",
      location: "B-06-15",
    },
    {
      key: "4",
      name: "Product damage",
      dateAndTime: "29 Sep 2020, 10:32 AM",
      location: "G-03-02",
    },
    {
      key: "5",
      name: "Safety (product damage)",
      dateAndTime: "29 Sep 2020, 10:32 AM",
      location: "L-03-10",
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
        Static
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Dynamic
      </Menu.Item>
    </Menu>
  );

  return (
    <section className="issue-management">
      <section>
        <CustomCard>
          <Card>
            <CustomHeadMap autoFit={true} value="Static Issues Density Heatmap "/>
          </Card>
          <section className="columns">
            <Card>
              <section className="incidence-rate">Rate of Incidents </section>
              <section className="rate-incid">
                <CustomColumn />
              </section>
            </Card>
            <Card>
              <section className="issue-count">
                <section className="issue-count_title">
                  Issue Count by Day
                </section>
                <section className="group-by">
                  Group By
                  {/* <Dropdown overlay={menu}>
                    <Button>
                      Static <DownOutlined />
                    </Button>
                  </Dropdown> */}
                  <div className="select-group">
                    <ul>
                      <li>Static</li>
                      <li>Daynamic</li>
                    </ul>
                  </div>
                </section>
              </section>
              <section className="issue-count-graph">
                <h6>Number of Issues </h6>
                <CustomGroupColumn />
              </section>
            </Card>
          </section>
          <section className="post-issue">
            <Card>
              {/* <Table
              columns={columns}
              dataSource={data}
              align="center"
              onChange={onChange}
            /> */}

              <table>
                <tr>
                  <th>Posted Issues</th>
                  <th>Date and Time </th>
                  <th>Location</th>
                  <th>Satus</th>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td>
                    <Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td>
                  <Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td><Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select></td>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td><Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select></td>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td><Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select></td>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td><Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select></td>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td><Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select></td>
                </tr>
                <tr>
                  <td>Saftey ( workforce injury)</td>
                  <td>29 Sep 2020, 10:32 AM</td>
                  <td>L-03-09</td>
                  <td><Select
                      defaultValue="open"
                      style={{ width: 120 }}
                      onChange={handleChange}
                    >
                      <Option value="open">Open</Option>
                      <Option value="progress">In progress</Option>
                      <Option value="solved">Solved</Option>
                    </Select></td>
                </tr>
                
              </table>
            </Card>
          </section>
        </CustomCard>
      </section>
    </section>
  );
};

export default IssueManagement;

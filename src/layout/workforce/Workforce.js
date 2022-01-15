import React from "react";
import { Card, Table } from "antd";
import { Line } from "@ant-design/charts";
import CustomCard from "../../components/customCard/CustomCard";
import CustomGroupColumn from "../../components/CustomGroupColumn/CustomGroupColumn";
import "./workforce.css";
import WorkflowTag from "../../components/workflowTag/WorkflowTag";

const Workforce = () => {
  const columns = [
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
      render: (text) => text,
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Churn % (1 month)",
      dataIndex: "churn1",
      key: "churn1",
    },
    {
      title: "Churn % (3 month)",
      dataIndex: "churn3",
      key: "churn3",
    },
    {
      title: "Churn % (9 month)",
      dataIndex: "churn9",
      key: "churn9",
    },
    { title: "Distance", dataIndex: "distance", key: "distance" },
  ];

  const tableData = [
    {
      key: "1",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "2",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "3",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "4",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "5",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "6",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "7",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "8",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "9",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "10",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "11",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "12",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "13",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
    {
      key: "14",
      employee: "Mikal Jackson",
      position: "supervisor",
      churn1: "10%",
      churn3: "210%",
      churn9: "30%",
      distance: "10km",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const data = [
    {
      year: "2020",
      value: 10,
      category: "Current Pattern",
    },

    {
      year: "2020",
      value: 30,
      category: "Clerk",
    },

    {
      year: "2021",
      value: 15,
      category: "Current Pattern",
    },

    {
      year: "2021",
      value: 15,
      category: "Clerk",
    },

    {
      year: "2022",
      value: 14,
      category: "Current Pattern",
    },

    {
      year: "2022",
      value: 12,
      category: "Clerk",
    },

    {
      year: "2023",
      value: 50,
      category: "Current Pattern",
    },

    {
      year: "2023",
      value: 30,
      category: "Clerk",
    },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    smooth: true,
  };

  return (
    <section className="workforce">
      <CustomCard>
        <section className="row workforce-table">
          <Card>
            <Table
              className="table"
              columns={columns}
              dataSource={tableData}
              align="center"
              onChange={onChange}
              pagination={false} 
            />
          </Card>

          <section className="emplyee-graph">
            <section className="top-graph-heading">Employee’s turnover </section>
          <CustomGroupColumn />
          </section>
           

        </section>
        
          <section className="employees-turnover">
            <section className="employees-turnover_left">
              <section className="employees-turnover_left-top">
                <section className="name-container">
                  <section className="name-container_name">
                    Employee Turnover
                  </section>
                  <section className="name-container_date">
                    as of 25 May 2019, 09:41 PM
                  </section>
                </section>
                <section className="button-container">
                  <section className="current-position">
                    <section className="purple line"></section>
                    <section className="current-position_name">
                      Current Position
                    </section>
                  </section>

                  <section className="current-position">
                    <section className="grey line"></section>
                    <section className="current-position_name">
                      Last year
                    </section>
                  </section>
                </section>
              </section>

              <section className="employees-turnover_left-bottom">
                <Line {...config} />
              </section>
            </section>
            <section className="employees-turnover_right">
              <WorkflowTag title="Employee Terminated" subtitle="19" />
              <WorkflowTag title="New Hires" subtitle="42" />
              <WorkflowTag title="" subtitle="" />
              <WorkflowTag title="" subtitle="" />
            </section>
          </section>
      </CustomCard>
    </section>
  );
};

export default Workforce;

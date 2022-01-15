import React from "react";
import { Column } from "@ant-design/charts";
import './customGroupColumn.css';

const CustomGroupColumn = () => {
  const data = [
    {
      name: "monday",
      month: "January",
      value: 5,
      type: "Warehouse Manager",
    },
    {
      name: "monday",
      month: "February",
      value: 6,
      type: "Supervisor",
    },
    {
      name: "monday",
      month: "February",
      value: 5,
      type: "Inventory Controller",
    },
    {
      name: "monday",
      month: "February",
      value: 3,
      type: "Warehouse Manager",
    },
    {
      name: "monday",
      month: "February",
      value: 5,
      type: "Material Handler",
    },
    {
      name: "monday",
      month: "March",
      value: 5,
      type: "Material Handler",
    },
    {
      name: "monday",
      month: "April",
      value: 10,
      type: "Warehouse Manager",
    },
    {
      name: "monday",
      month: "April",
      value: 5,
      type: "Inventory Controller",
    },
    {
      name: "monday",
      month: "May",
      value: 5,
      type: "Inventory Controller",
    },
    {
      name: "monday",
      month: "May",
      value: 10,
      type: "Associate",
    },
    {
      name: "monday",
      month: "June",
      value: 15,
      type: "Forklift Driver",
    },
    {
      name: "monday",
      month: "June",
      value: 10,
      type: "Material Handler",
    },
    {
      name: "monday",
      month: "July",
      value: 5,
      type: "Inventory Controller",
    },
    {
      name: "monday",
      month: "July",
      value: 10,
      type: "Associate",
    },
  ];

  const config = {
    data,
    xField: "month",
    yField: "value",
    isGroup: true,
    isStack: true,
    seriesField: "type",
    groupField: "name",
  };

  return(
    <>
    <section className="customgrapcolumn">
    <section className="customgraphcolumn-heading">Count of employees</section>
    <Column width={580} {...config} />
    </section>
  
    </>
  )
  
};

export default CustomGroupColumn;

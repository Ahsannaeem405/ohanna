import React from "react";
import { Column } from "@ant-design/charts";

const CustomColumn = () => {
  const data = [
    {
      type: "Slip and Fall Accidents",
      sales: 22,
    },
    {
      type: "Falling Objects ",
      sales: 11,
    },
    {
      type: "Rack Collapse",
      sales: 6,
    },
    {
      type: "Forklift/Heavy Machinery Accidents",
      sales: 4,
    },
    {
      type: "STRAIN AND SPRAIN ACCIDENTS",
      sales: 3,
    },
    {
      type: "Dangerous Electrical Event",
      sales: 2,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "type",
      },
      sales: {
        alias: "sales",
      },
    },
  };
  return <Column width={590} {...config} />;
};

export default CustomColumn;

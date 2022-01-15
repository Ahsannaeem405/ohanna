import React from "react";
import { Column } from "@ant-design/charts";

const CustomGroupColumn = () => {
  const data = [
    {
      name: "monday",
      day: "Monday",
      value: 5,
      type: "Others",
    },

    {
      name: "monday",
      day: "Monday",
      value: 5,
      type: "Forklift damage",
    },

    {
      name: "tuesday",
      day: "Tuesday",
      value: 20,
      type: "Product",
    },

    {
      name: "wednesday",
      day: "Wednesday",
      value: 5,
      type: "Inventory accuracy",
    },

    {
      name: "thursday",
      day: "Thursday",
      value: 5,
      type: "Inventory accuracy",
    },

    {
      name: "thursday",
      day: "Thursday",
      value: 14,
      type: "Device damage",
    },

    {
      name: "friday",
      day: "Friday",
      value: 5,
      type: "Others",
    },

    {
      name: "friday",
      day: "Friday",
      value: 5,
      type: "Device damage",
    },

    {
      name: "friday",
      day: "Friday",
      value: 5,
      type: "Product damage",
    },

    {
      name: "saturday",
      day: "Saturday",
      value: 23,
      type: "Inventory accuracy",
    },

    {
      name: "sunday",
      day: "Sunday",
      value: 5,
      type: "Inventory accuracy",
    },

    {
      name: "sunday",
      day: "Sunday",
      value: 10,
      type: "Warehouse space",
    },
  ];

  const config = {
    data,
    xField: "day",
    yField: "value",
    isGroup: true,
    isStack: true,
    seriesField: "type",
    groupField: "name",
  };

  return <Column width={500} {...config} />;
};

export default CustomGroupColumn;

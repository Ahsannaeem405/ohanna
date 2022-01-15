import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";

const CustomAreaGraph = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     asyncFetch();
  //   }, []);

  //   const asyncFetch = () => {
  //     fetch(
  //       "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => {
  //         console.log("fetch data failed", error);
  //       });
  //   };

  let data = [
    {
      year: "2000",
      value: 284,
      category: "Unload",
    },
    {
      year: "2000",
      value: 232,
      category: "Picking",
    },
    {
      year: "2000",
      value: 128,
      category: "Receive",
    },
    {
      year: "2000",
      value: 22,
      category: "Loading",
    },
    {
      year: "2001",
      value: 284,
      category: "Unload",
    },
    {
      year: "2001",
      value: 244,
      category: "Picking",
    },
    {
      year: "2001",
      value: 131,
      category: "Receive",
    },
    {
      year: "2001",
      value: 23,
      category: "Loading",
    },
    {
      year: "2002",
      value: 283,
      category: "Unload",
    },
    {
      year: "2002",
      value: 251,
      category: "Picking",
    },
    {
      year: "2002",
      value: 134,
      category: "Receive",
    },
    {
      year: "2002",
      value: 25,
      category: "Loading",
    },
    {
      year: "2003",
      value: 295,
      category: "Unload",
    },
    {
      year: "2003",
      value: 269,
      category: "Picking",
    },
    {
      year: "2003",
      value: 139,
      category: "Receive",
    },
    {
      year: "2003",
      value: 27,
      category: "Loading",
    },
    {
      year: "2004",
      value: 304,
      category: "Unload",
    },
    {
      year: "2004",
      value: 290,
      category: "Picking",
    },
    {
      year: "2004",
      value: 144,
      category: "Receive",
    },
    {
      year: "2004",
      value: 29,
      category: "Loading",
    },
    {
      year: "2005",
      value: 306,
      category: "Unload",
    },
    {
      year: "2005",
      value: 310,
      category: "Picking",
    },
    {
      year: "2005",
      value: 148,
      category: "Receive",
    },
    {
      year: "2005",
      value: 32,
      category: "Loading",
    },
    {
      year: "2006",
      value: 309,
      category: "Unload",
    },
    {
      year: "2006",
      value: 329,
      category: "Picking",
    },
    {
      year: "2006",
      value: 153,
      category: "Receive",
    },
    {
      year: "2006",
      value: 35,
      category: "Loading",
    },
    {
      year: "2007",
      value: 307,
      category: "Unload",
    },
    {
      year: "2007",
      value: 342,
      category: "Picking",
    },
    {
      year: "2007",
      value: 156,
      category: "Receive",
    },
    {
      year: "2007",
      value: 38,
      category: "Loading",
    },
    {
      year: "2008",
      value: 310,
      category: "Unload",
    },
    {
      year: "2008",
      value: 358,
      category: "Picking",
    },
    {
      year: "2008",
      value: 163,
      category: "Receive",
    },
    {
      year: "2008",
      value: 38,
      category: "Loading",
    },
    {
      year: "2009",
      value: 304,
      category: "Unload",
    },
    {
      year: "2009",
      value: 359,
      category: "Picking",
    },
    {
      year: "2009",
      value: 158,
      category: "Receive",
    },
    {
      year: "2009",
      value: 41,
      category: "Loading",
    },
    {
      year: "2010",
      value: 310,
      category: "Unload",
    },
    {
      year: "2010",
      value: 381,
      category: "Picking",
    },
    {
      year: "2010",
      value: 169,
      category: "Receive",
    },
    {
      year: "2010",
      value: 44,
      category: "Loading",
    },
    {
      year: "2011",
      value: 313,
      category: "Unload",
    },
    {
      year: "2011",
      value: 405,
      category: "Picking",
    },
    {
      year: "2011",
      value: 160,
      category: "Receive",
    },
    {
      year: "2011",
      value: 49,
      category: "Loading",
    },
    {
      year: "2012",
      value: 320,
      category: "Unload",
    },
    {
      year: "2012",
      value: 410,
      category: "Picking",
    },
    {
      year: "2012",
      value: 140,
      category: "Receive",
    },
    {
      year: "2012",
      value: 51,
      category: "Loading",
    },
    {
      year: "2013",
      value: 322,
      category: "Unload",
    },
    {
      year: "2013",
      value: 412,
      category: "Picking",
    },
    {
      year: "2013",
      value: 111,
      category: "Receive",
    },
    {
      year: "2013",
      value: 55,
      category: "Loading",
    },
    {
      year: "2014",
      value: 328,
      category: "Unload",
    },
    {
      year: "2014",
      value: 420,
      category: "Picking",
    },
    {
      year: "2014",
      value: 0,
      category: "Receive",
    },
    {
      year: "2014",
      value: 56,
      category: "Loading",
    },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    color: [
      "#6897a7",
      "#8bc0d6",
      "#60d7a7",
      "#dedede",
      "#fedca9",
      "#fab36f",
      "#d96d6f",
    ],
    xAxis: {
      type: "time",
      mask: "YYYY",
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    legend: {
      position: "top",
    },
  };

  return <Area {...config} />;
};

export default CustomAreaGraph;

import React, { useState, useEffect } from "react";
import { Heatmap } from "@ant-design/charts";
import heatMapImage from "./../../assets/images/heatmap.png";
import "./customHeatMap.css";

const CustomHeatMap = ({value}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/heatmap.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    type: "density",
    xField: "g",
    yField: "l",
    colorField: "tmp",
    color: "#FAFFA8-#1890FF",
    legend: {
      position: "bottom",
    },
    annotations: [
      {
        type: "image",
        start: ["min", "max"],
        end: ["max", "min"],
        src: heatMapImage,
      },
    ],
  };

  return (
    <section>
      <section className="heatmap-title">{value}</section>
      <section className="heatmap-self">
      <Heatmap {...config} />
      </section>
      
    </section>
  );
};

export default CustomHeatMap;

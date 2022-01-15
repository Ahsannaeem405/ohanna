import React from "react";
import { OrganizationGraph } from "@ant-design/charts";
import CustomCard from "../../components/customCard/CustomCard";
import Icon1 from "../../assets/images/person-image1.png";
import Icon2 from "../../assets/images/person-image2.png";
import Icon3 from "../../assets/images/person-image3.png";
import Icon4 from "../../assets/images/person-image4.png";
import Icon5 from "../../assets/images/person-image5.png";
import Icon6 from "../../assets/images/person-image6.png";

const OrganizationChart = () => {
  const data = {
    id: "root-blue",
    value: {
      text: "Jasmine",
      icon: Icon1,
    },
    children: [
      {
        id: "robert-jackson",
        value: {
          text: "Robert",
          icon: Icon2,
        },
      },
      {
        id: "joel",
        value: {
          text: "Joel Alan",
          icon: Icon3,
        },
        children: [
          {
            id: "jasmine2-blue",
            value: {
              text: "Jasmine",
              icon: Icon5,
            },
            children: [
              {
                id: "robert-jackson1",
                value: {
                  text: "Robert",
                  icon: Icon2,
                },
              },
              {
                id: "joel1",
                value: {
                  text: "Joel Alan",
                  icon: Icon6,
                },
              },
            ],
          },
        ],
      },
      {
        id: "alen-walker",
        value: {
          text: "Alen Walk",
          icon: Icon1,
        },
        children: [
          {
            id: "jasmine1-blue",
            value: {
              text: "Jasmine",
              icon: Icon5,
            },
            children: [
              {
                id: "alen-walker1",
                value: {
                  text: "Alen Walk",
                  icon: Icon1,
                },
              },
              {
                id: "ashly-ann1",
                value: {
                  text: "Ashly Ann",
                  icon: Icon4,
                },
              },
            ],
          },
        ],
      },
      {
        id: "ashly-ann",
        value: {
          text: "Ashly Ann",
          icon: Icon5,
        },
      },
    ],
  };

  return (
    <section className="organization-container">
      <CustomCard />
      <OrganizationGraph
        data={data}
        behaviors={["drag-canvas", "zoom-canvas", "drag-node"]}
        nodeCfg={{
          style: (node) => {
            return node.id.includes("blue")
              ? {
                  fill: "#91d5ff",
                  stroke: "#91d5ff",
                }
              : {};
          },
          // label: {
          //   style: (node, group, type) => {
          //     const styles = {
          //       icon: {
          //         width: 32,
          //         height: 32,
          //       },
          //       value: {
          //         fill: "#fff",
          //       },
          //       text: {
          //         fill: "#fff",
          //       },
          //     };
          //     return node.id === "joel" ? styles[type] : {};
          //   },
          // },
        }}
      />
    </section>
  );
};

export default OrganizationChart;

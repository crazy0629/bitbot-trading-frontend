import React from "react";
import { Pie } from "@ant-design/plots";

const DemoPie = () => {
  const data = [
    {
      type: "USDT",
      value: 27,
    },
    {
      type: "BUSD",
      value: 25,
    },
    {
      type: "DUST (USD)",
      value: 18,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    width: 100,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;

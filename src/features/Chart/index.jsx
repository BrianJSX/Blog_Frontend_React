import React from "react";
import { Line } from "@ant-design/charts";
import "./style.scss";

function Chart() {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
    { year: "2000", value: 15 },
    { year: "2001", value: 16 },
    { year: "2002", value: 17},
    { year: "2003", value: 20 },

  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  return (
    <div className="chart">
        <Line {...config} />
    </div>
  );
}

export default Chart;

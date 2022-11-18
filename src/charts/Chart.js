import React from "react";
import "./Chart.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";
import { dummydata } from "./dummyData";

const Charts = ({ title, datakey }) => {
  // ---------tooltip----------
  const getIntroOfPage = (label) => {
    if (label === "Jan-14") {
      return "Jan is about men's clothing";
    }
    if (label === "Page B") {
      return "Page B is about women's dress";
    }
    if (label === "Page C") {
      return "Page C is about women's bag";
    }
    if (label === "Page D") {
      return "Page D is about household goods";
    }
    if (label === "Page E") {
      return "Page E is about food";
    }
    if (label === "Page F") {
      return "Page F is about baby food";
    }
    return "";
  };

  //   --------------------------------------
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }

    return null;
  };
  // --------------------------------

  return (
    <div className="charts">
      <h4>{title}</h4>
      <ResponsiveContainer width="100%" height="300px" aspect={3 / 1}>
        <LineChart data={dummydata}>
          <XAxis dataKey="month" stroke="#a1a1a1" />
          {/* <YAxis dataKey={datakey} stroke="#a1a1a1" /> */}
          <YAxis
            // dataKey={[0, 500, 1000, 1500, 2000]}
            type="number"
            domain={[0, 2000]}
            stroke="#a1a1a1"
          />
          <Tooltip />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="uv"
            stroke="yellow"
            fill="transparent"
          />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey="pv"
            stroke="red"
            fill="transparent"
          />
          <Line
            strokeWidth={2}
            type="monotone"
            dataKey="line3"
            stroke="black"
            fill="transparent"
          />

          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="line4"
            stroke="green"
            fill="transparent"
          />
          <CartesianGrid stroke="#e0dfdf" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;

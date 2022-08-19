import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { OverviewStyled } from "../css/OverviewStyled";

const Overview = () => {
  return (
    <OverviewStyled>
      <div className="overview-con">
        <div className="header">
          <p>Overview</p>
        </div>
        <PieChart
          data={[
            { title: "Pending", value: 202, color: "#8292aa" },
            { title: "Ready To Deliver", value: 236, color: "#2dce8a" },
            { title: "Returned", value: 20, color: "#f2365d" },
            { title: "Processing", value: 99, color: "#ffa11d" },
            { title: "Delivered", value: 347, color: "#0083ff" },
          ]}
          lineWidth={50}
          className="chart"
        />
      </div>
    </OverviewStyled>
  );
};

export default Overview;

import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const data = [
  { name: "Intransit", value: 23, color: "#956F00" },
  { name: "Pending", value: 35, color: "#E5A500" },
  { name: "Delivered", value: 40, color: "#FFC879" },
  { name: "Out for delivery", value: 10, color: "#FFDDB6" },
  { name: "Exception", value: 50, color: "#5E4200" },
];

interface ActiveShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  value: number;
}

// Function to render the active shape directly on the donut
const renderActiveShape = (props: ActiveShapeProps) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
  } = props;

  // Calculate the mid angle to place the value directly on the slice
  const RADIAN = Math.PI / 180;
  const midAngle = (startAngle + endAngle) / 2;
  const radius = innerRadius + (outerRadius - innerRadius) / 2; // Position at the center of the slice
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* Value directly on the slice */}
      <text
        x={x}
        y={y}
        fill="#4A4A4A"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        {value}
      </text>
    </g>
  );
};

const ShipmentChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="">
      <PieChart width={360} height={380}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          innerRadius={70}
          outerRadius={170}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default ShipmentChart;

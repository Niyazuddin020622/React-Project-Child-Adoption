import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card } from "react-bootstrap";

const AgeChart = ({ ageData }) => {
  return (
    <Card className="shadow p-3">
      <h4 className="text-center">Age Group Distribution</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="ageRange" label={{ value: "Age Groups", position: "insideBottom", dy: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#28a745" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AgeChart;

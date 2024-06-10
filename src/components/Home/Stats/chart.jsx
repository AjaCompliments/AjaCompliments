import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const ChartContainer = styled.div`
  position: absolute;
  width: 45.1vh; /* Converted from 371px */
  height: 29.2vh; /* Converted from 192px */
  left: 5vw;
  top: -0.6vh; /* Converted from 136px */
  background: #f9f9f9; /* Fallback background color */
  border-radius: 1vh; /* Converted from 10px */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chart = () => {
  return (
    <ChartContainer>
      <LineChart
        width={620} // Adjusted width for better fit
        height={380} // Adjusted height for better fit
        data={data}
        margin={{ top: 20, right: 20, left: 10, bottom: -25 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend wrapperStyle={{width:100, top: 80, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ChartContainer>
  );
};

export default Chart;
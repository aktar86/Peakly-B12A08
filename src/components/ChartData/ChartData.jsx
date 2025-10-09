import React from "react";
import { BarChart, Bar, XAxis,YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList} from "recharts";

const ChartData = ({barChartData}) => {
  const data = barChartData
  // console.log(data);

  return (
     
    <div className="w-12/12 h-[400px] mt-10" >
    <h1 className="font-bold text-xl" >Ratings</h1>
     
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis 
            type="number" 
          />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={50}
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" barSize={35} radius={[0, 4, 4, 0]}>
            <LabelList 
              dataKey="count" 
              position="right" 
              style={{ fill: '#000', fontSize: '14px' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartData;

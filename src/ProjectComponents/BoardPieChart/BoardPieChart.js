import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

function BoardPieChart({ data, dataKey, nameKey }) {
  return (
    <div className={`w-full h-full`}>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart width="100%" >
          <Tooltip />
          <Pie data={data} dataKey="newCases" nameKey="country" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BoardPieChart

import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';

function BoardPieChart({ data }) {

  const Color = ["#e32047", '#f77c95', '#8a0025', '#ff5e5e', '#ff1900']

  return (
    <div className={`w-full h-full`}>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart width="100%" >
          <Tooltip />
          <Pie data={data} dataKey="newCases" nameKey="country" cx="50%" cy="50%" outerRadius={80} fill="#e32047" label>
            {
              data.map((item, index) => {
                return (
                  <Cell key={index} fill={Color[index]} />
                )
              })
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BoardPieChart

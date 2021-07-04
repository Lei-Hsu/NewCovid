import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line, ResponsiveContainer } from 'recharts';

function DeathsRatioLineChart({ DeathsRatioData, Line1, Line2, Line3, Line4, Line5 }) {
  return (
    <div className={`w-full h-full`}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={DeathsRatioData} margin={{ top: 5, right: 10, bottom: 5, left: 25 }}>
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey={Line1} stroke="#8884d8" animationDuration={1000} />
          <Line type="monotone" dataKey={Line2} stroke="#82ca9d" animationDuration={2000} />
          <Line type="monotone" dataKey={Line3} stroke="#ff7c2b" animationDuration={3000} />
          <Line type="monotone" dataKey={Line4} stroke="#05fbff" animationDuration={4000} />
          <Line type="monotone" dataKey={Line5} stroke="#ffbb00" animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DeathsRatioLineChart

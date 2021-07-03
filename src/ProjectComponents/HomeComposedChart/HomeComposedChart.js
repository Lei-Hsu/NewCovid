import React from 'react'
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, ResponsiveContainer } from 'recharts';

function HomeComposedChart({ Data, XData, AreaData }) {
  return (
    <div className={`w-full h-full`}>
      <ResponsiveContainer width='100%' height='100%'>
        <ComposedChart data={Data} margin={{ top: 5, right: 10, bottom: 5, left: 25 }}>
          <XAxis dataKey={XData} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="linear" dataKey={AreaData} fill="red" stroke="#A10220" dot animationDuration={4000} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>

  )
}

export default HomeComposedChart

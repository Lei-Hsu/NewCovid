import React from 'react'
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

function TreeChart({ Data }) {

  const data = [
    {
      name: "axis",
      children: [
        { name: "Axes", size: 1302 },
        { name: "Axis", size: 24593 },
        { name: "AxisGridLine", size: 652 },
        { name: "AxisLabel", size: 636 },
        { name: "CartesianAxes", size: 6703 }
      ]
    },
  ]

  return (
    <div className={`w-full h-full`}>
      <ResponsiveContainer width='100%' height='100%'>
        <Treemap
          width={400}
          height={200}
          data={Data}
          dataKey="size"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8a0025"
          style={{ fontFamily: 'sans-serif' }}
        >
          <Tooltip />

        </Treemap>
      </ResponsiveContainer>
    </div>
  )
}

export default TreeChart

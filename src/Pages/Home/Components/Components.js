import React from 'react'
import HomeComposedChart from '../../../ProjectComponents/HomeComposedChart/HomeComposedChart'
import { historyData } from '../../../Mapping/Mapping'

function Components() {
  return (
    <div className={` flex flex-col justify-center items-center`}>
      <div className={`mt-14 px-4 border-r-2 border-l-2 border-red-600`}>
        <p className={`text-2xl lg:text-3xl`}>全球每日新增確診人數趨勢</p>
      </div>
      <div className={`lg:container w-3/4 h-96  mx-auto mt-14 rounded-lg shadow-lg bg-white`}>
        <HomeComposedChart
          Data={historyData}
          XData={'date'}
          AreaData={'new'}
        />
      </div>
    </div>
  )
}

export default Components

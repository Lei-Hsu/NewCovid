import React, { useEffect, useState } from 'react'
import { handleCountryDeathsRatio } from '../../../Handler/'
import DeathsRatioLineChart from '../../../ProjectComponents/DeathsRatioLineChart/DeathsRatioLineChart'

function Components(props) {

  const [Tab, setTab] = useState('死亡率排行')
  const [DeathsRatioData, setDeathsRatioData] = useState()
  // 死亡率資料已撈回來
  let propsRatioDataReady = props?.TaiwanDeathsRatioData && props?.TaiwanDeathsRatioData && props?.UsaDeathsRatioData && props?.UkDeathsRatioData && props?.MexicoDeathsRatioData && props?.IndiaDeathsRatioData

  useEffect(() => {
    if (propsRatioDataReady) {
      setDeathsRatioData
        (
          handleCountryDeathsRatio
            (
              props?.TaiwanDeathsRatioData,
              props?.TaiwanDeathsRatioData,
              props?.UsaDeathsRatioData,
              props?.UkDeathsRatioData,
              props?.MexicoDeathsRatioData,
              props?.IndiaDeathsRatioData
            )
        )
    }
    //開handler 帶參數把 DeathsRatioData 做出表格需要的data格式
  }, [propsRatioDataReady])

  return (
    <div className={`w-full h-3/4 flex justify-center items-center`}>
      <div className={`w-3/4 h-4/5 mt-10 bg-white rounded-lg shadow-lg flex flex-col items-center`}>
        <div className={`flex my-4`}>
          <div className={`w-24 mx-4 p-2 text-center ${Tab === '死亡率排行' ? `bg-red-500` : `bg-gray-500`} text-white rounded-md cursor-pointer`}
            onClick={() => setTab('死亡率排行')}
          >
            死亡率排行
          </div>
          <div className={`w-24 mx-4 p-2 text-center ${Tab === '五大洲排行' ? `bg-red-500` : `bg-gray-500`} text-white rounded-md cursor-pointer`}
            onClick={() => setTab('五大洲排行')}
          >
            五大洲排行
          </div>
          <div className={`w-24 mx-4 p-2 text-center ${Tab === '還沒想到' ? `bg-red-500` : `bg-gray-500`} text-white rounded-md cursor-pointer`}
            onClick={() => setTab('還沒想到')}
          >
            還沒想到
          </div>
        </div>
        {
          propsRatioDataReady &&
          (Tab === '死亡率排行')
          &&
          <DeathsRatioLineChart
            DeathsRatioData={DeathsRatioData}
            Line1={'IndiaDeathsRatio'}
            Line2={'TaiwanDeathsRatio'}
            Line3={'UsaDeathsRatio'}
            Line4={'UkDeathsRatio'}
            Line5={'MexicoDeathsRatio'}
          />

        }
      </div>
    </div>
  )
}

export default Components

import React, { useEffect, useState } from 'react'
import { handleCountryDeathsRatio, handleFiveContinentData } from '../../../Handler/'
import DeathsRatioLineChart from '../../../ProjectComponents/DeathsRatioLineChart/DeathsRatioLineChart'
import TabBottom from '../../../ProjectComponents/TabBottom/TabBottom'

function Components(props) {

  const [Tab, setTab] = useState('死亡率排行')
  const [DeathsRatioData, setDeathsRatioData] = useState()


  //#region 死亡率資料已撈回來
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
  }, [propsRatioDataReady])
  //#endregion

  //#region 分五大洲排行資料
  let GlobalDataReady = props.GlobalData ? true : false
  useEffect(() => {
    if (GlobalDataReady) {
      const { global, asia, europe, america, africa, oceania } = handleFiveContinentData(props.GlobalData)
    }

  }, [GlobalDataReady])
  //#endregion

  return (
    <div className={`w-full h-3/4 flex justify-center items-center`}>
      <div className={`w-3/4 h-3/5 mt-10 bg-white rounded-lg shadow-lg flex flex-col items-center box-border`}>
        <div className={`flex my-4`}>
          <TabBottom
            text={`死亡率排行`}
            Tab={Tab}
            setTab={setTab}
          />
          <TabBottom
            text={`五大洲排行`}
            Tab={Tab}
            setTab={setTab}
          />
          <TabBottom
            text={`還沒想到`}
            Tab={Tab}
            setTab={setTab}
          />
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
        {
          GlobalDataReady &&
          (Tab === '五大洲排行')
          &&
          <div className={`w-full h-full flex flex-col`}>
            {/* <div className={`w-full lg:w-2/12`}>
              {/* <div className={`w-full h-full flex justify-center lg:justify-around lg:items-center`}>
                <TabBottom
                  text={`全球`}
                  Tab={Tab}
                  setTab={setTab}
                />
                <TabBottom
                  text={`亞洲`}
                  Tab={Tab}
                  setTab={setTab}
                />
                <TabBottom
                  text={`歐洲`}
                  Tab={Tab}
                  setTab={setTab}
                />
                <TabBottom
                  text={`美洲`}
                  Tab={Tab}
                  setTab={setTab}
                />
                <TabBottom
                  text={`大洋`}
                  Tab={Tab}
                  setTab={setTab}
                />
              </div> */}
            {/* </div>  */}
            <div className={`lg:w-10/12`}>
              <DeathsRatioLineChart
                DeathsRatioData={DeathsRatioData}
                Line1={'IndiaDeathsRatio'}
                Line2={'TaiwanDeathsRatio'}
                Line3={'UsaDeathsRatio'}
                Line4={'UkDeathsRatio'}
                Line5={'MexicoDeathsRatio'}
              />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Components

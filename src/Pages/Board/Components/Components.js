import React, { useEffect, useState } from 'react'
import { handleCountryDeathsRatio, handleFiveContinentData, handleContinentCaseData, populationFormat } from '../../../Handler/'
import DeathsRatioLineChart from '../../../ProjectComponents/DeathsRatioLineChart/DeathsRatioLineChart'
import BoardPieChart from '../../../ProjectComponents/BoardPieChart/BoardPieChart'
import TabBottom from '../../../ProjectComponents/TabBottom/TabBottom'
import BoardTopFive from '../../../ProjectComponents/BoardTopFive/BoardTopFive'

function Components(props) {

  const [Tab, setTab] = useState('死亡率排行')
  const [subTab, setSubTab] = useState('全球')
  const [DeathsRatioData, setDeathsRatioData] = useState()
  const [GlobalData, setGlobalData] = useState()
  const [AsiaData, setAsiaData] = useState()
  const [EuropeData, setEuropeData] = useState()
  const [AmericaData, setAmericaData] = useState()
  const [AfricaData, setAfricaData] = useState()
  const [OceaniaData, setOceaniaData] = useState()


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
      let { global, asia, europe, america, africa, oceania } = handleFiveContinentData(props.GlobalData)
      setGlobalData(handleContinentCaseData(global))
      setAsiaData(handleContinentCaseData(asia))
      setEuropeData(handleContinentCaseData(europe))
      setAmericaData(handleContinentCaseData(america))
      setAfricaData(handleContinentCaseData(africa))
      setOceaniaData(handleContinentCaseData(oceania))
    }
  }, [GlobalDataReady])
  //#endregion
  console.log(AsiaData)

  return (
    <div className={`w-full h-3/4 flex justify-center items-center`}>
      <div className={`w-3/4 h-5/6 mt-10 bg-white rounded-lg shadow-lg flex flex-col items-center box-border`}>
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
            <div className={`w-full`}>
              <div className={`w-full h-full flex justify-center lg:justify-around lg:items-center`}>
                <TabBottom
                  text={`全球`}
                  Tab={subTab}
                  setTab={setSubTab}
                />
                <TabBottom
                  text={`亞洲`}
                  Tab={subTab}
                  setTab={setSubTab}
                />
                <TabBottom
                  text={`歐洲`}
                  Tab={subTab}
                  setTab={setSubTab}
                />
                <TabBottom
                  text={`美洲`}
                  Tab={subTab}
                  setTab={setSubTab}
                />
                <TabBottom
                  text={`非洲`}
                  Tab={subTab}
                  setTab={setSubTab}
                />
                <TabBottom
                  text={`大洋`}
                  Tab={subTab}
                  setTab={setSubTab}
                />
              </div>
            </div>
            <div className={`w-full h-full mt-4 flex flex-col lg:flex-row justify-between items-center`}>
              <div className={`w-full h-1/3 lg:w-2/5 lg:h-full text-center`}>
                今日新增確診人數排行
                <div className={`flex flex-row lg:flex-col justify-center items-center mt-4`}>
                  {
                    subTab === '全球'
                    &&
                    GlobalData.map((item, index) => {
                      return (
                        <BoardTopFive
                          item={item}
                          index={index}
                        />
                      )
                    })
                  }
                  {
                    subTab === '亞洲'
                    &&
                    AsiaData.map((item, index) => {
                      return (
                        <BoardTopFive
                          item={item}
                          index={index}
                        />
                      )
                    })
                  }
                  {
                    subTab === '歐洲'
                    &&
                    EuropeData.map((item, index) => {
                      return (
                        <BoardTopFive
                          item={item}
                          index={index}
                        />
                      )
                    })
                  }
                  {
                    subTab === '美洲'
                    &&
                    AmericaData.map((item, index) => {
                      return (
                        <BoardTopFive
                          item={item}
                          index={index}
                        />
                      )
                    })
                  }
                  {
                    subTab === '非洲'
                    &&
                    AfricaData.map((item, index) => {
                      return (
                        <BoardTopFive
                          item={item}
                          index={index}
                        />
                      )
                    })
                  }
                  {
                    subTab === '大洋'
                    &&
                    OceaniaData.map((item, index) => {
                      return (
                        <BoardTopFive
                          item={item}
                          index={index}
                        />
                      )
                    })
                  }
                </div>
              </div>
              <div className={`w-full h-2/3 lg:w-3/5 lg:h-full`}>
                {
                  subTab === '全球'
                  &&
                  <BoardPieChart
                    data={GlobalData}
                  />
                }
                {
                  subTab === '亞洲'
                  &&
                  <BoardPieChart
                    data={AsiaData}
                  />
                }
                {
                  subTab === '歐洲'
                  &&
                  <BoardPieChart
                    data={EuropeData}
                  />
                }
                {
                  subTab === '美洲'
                  &&
                  <BoardPieChart
                    data={AmericaData}
                  />
                }
                {
                  subTab === '非洲'
                  &&
                  <BoardPieChart
                    data={AfricaData}
                  />
                }
                {
                  subTab === '大洋'
                  &&
                  <BoardPieChart
                    data={OceaniaData}
                  />
                }
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Components

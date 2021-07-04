import React, { useContext, useEffect, useCallback, useState } from 'react'
import Components from './Components/Components'
import { Context } from '../../App'
import { APIKEY } from '../../APIKEY/APIKEY'



function Board() {

  const { menuOpen, setMenuOpen, Board_API_URL, Search_API_URL } = useContext(Context)
  const [TaiwanDeathsRatioData, setTaiwanDeathsRatioData] = useState() // 台灣死亡率
  const [UsaDeathsRatioData, setUsaDeathsRatioData] = useState() // 美國死亡率
  const [IndiaDeathsRatioData, setIndiaDeathsRatioData] = useState() // 印度死亡率
  const [UkDeathsRatioData, setUkDeathsRatioData] = useState() // 英國死亡率
  const [MexicoDeathsRatioData, setMexicoDeathsRatioData] = useState() // 墨西哥死亡率

  const [GlobalData, setGlobalData] = useState() // 全球資料

  useEffect(() => {
    // 取得五個國家死亡率
    getCountryWeekDeathsRatioData('mexico', setMexicoDeathsRatioData)
    getCountryWeekDeathsRatioData('uk', setUkDeathsRatioData)
    getCountryWeekDeathsRatioData('india', setIndiaDeathsRatioData)
    getCountryWeekDeathsRatioData('usa', setUsaDeathsRatioData)
    getCountryWeekDeathsRatioData('taiwan', setTaiwanDeathsRatioData)
    // 取得五大洲資料
    getContinentData()
    setMenuOpen(false)
  }, [])


  //#region 取得單一國家近一週死亡率資料
  const getCountryWeekDeathsRatioData = useCallback((countryName, setData) => {
    fetch(`${Board_API_URL}/v1/spots/week?region=${countryName}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": APIKEY,
        "x-rapidapi-host": "coronavirus-map.p.rapidapi.com"
      }
    })
      .then(response => {
        return response.json()
      })
      .then((Res, error) => {
        if (Res.status === 200) {
          // console.log(Res)
          let data = [{}, {}, {}, {}, {}, {}, {},]
          // 資料日期
          let dateData = Object.keys(Res.data)
          // 資料死亡率
          let deathsRatioData = Object.values(Res.data).map(i => Math.round((i.death_ratio) * 1000) / 10)
          data.forEach((item, index) => item.date = dateData[index])
          data.forEach((item, index) => item.deathsRatio = deathsRatioData[index])
          setData(data)
        }
        else {
          throw error
        }
      })
      .catch(err => {
        alert('請稍後再嘗試')
        // setPending(false)
      });
  }, [])
  //#endregion

  //#region 取得五大洲資料
  const getContinentData = useCallback((countryName, setData) => {
    fetch(`${Search_API_URL}/statistics`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": APIKEY,
        "x-rapidapi-host": "covid-193.p.rapidapi.com"
      }
    })
      .then(response => {
        return response.json()
      })
      .then((Res, error) => {
        setGlobalData(Res.response)
      })
      .catch(err => {
        alert('請稍後再嘗試')
        // setPending(false)
      });
  }, [])
  //#endregion

  return (
    <Components
      TaiwanDeathsRatioData={TaiwanDeathsRatioData} // 台灣死亡率資料
      UsaDeathsRatioData={UsaDeathsRatioData} // 美國死亡率資料
      IndiaDeathsRatioData={IndiaDeathsRatioData} // 印度死亡率資料
      UkDeathsRatioData={UkDeathsRatioData} // 英國死亡率資料
      MexicoDeathsRatioData={MexicoDeathsRatioData} // 墨西哥死亡率資料
      GlobalData={GlobalData} // 全球資料
    />
  )
}

export default Board

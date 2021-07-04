import React, { useContext, useEffect, useCallback, useState } from 'react'
import Components from './Components/Components'
import { Context } from '../../App'
import { APIKEY } from '../../APIKEY/APIKEY'



function Board() {

  const { menuOpen, setMenuOpen, Board_API_URL } = useContext(Context)
  const [weekDate, setWeekData] = useState()
  const [TaiwanDeathsRatioData, setTaiwanDeathsRatioData] = useState()
  const [UsaDeathsRatioData, setUsaDeathsRatioData] = useState()
  const [IndiaDeathsRatioData, setIndiaDeathsRatioData] = useState()
  const [UkDeathsRatioData, setUkDeathsRatioData] = useState()
  const [MexicoDeathsRatioData, setMexicoDeathsRatioData] = useState()

  useEffect(() => {
    getCountryWeekDeathsRatioData('mexico', setMexicoDeathsRatioData)
    getCountryWeekDeathsRatioData('uk', setUkDeathsRatioData)
    getCountryWeekDeathsRatioData('india', setIndiaDeathsRatioData)
    getCountryWeekDeathsRatioData('usa', setUsaDeathsRatioData)
    getCountryWeekDeathsRatioData('taiwan', setTaiwanDeathsRatioData)
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
          setWeekData(dateData)
          // 資料死亡率
          let deathsRatioData = Object.values(Res.data).map(i => Math.round((i.death_ratio) * 100))
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

  return (
    <Components
      weekDate={weekDate} // 一週日期
      TaiwanDeathsRatioData={TaiwanDeathsRatioData} // 死亡率資料
      UsaDeathsRatioData={UsaDeathsRatioData} // 死亡率資料
      IndiaDeathsRatioData={IndiaDeathsRatioData} // 死亡率資料
      UkDeathsRatioData={UkDeathsRatioData} // 死亡率資料
      MexicoDeathsRatioData={MexicoDeathsRatioData} // 死亡率資料
    />
  )
}

export default Board

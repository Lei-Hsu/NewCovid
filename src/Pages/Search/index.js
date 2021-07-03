import React, { useCallback, useContext, useEffect, useState } from 'react'
import Components from './Components/Components'
import { Context } from '../../App'
import { APIKEY } from '../../APIKEY/APIKEY'

function Search() {

  const { menuOpen, setMenuOpen } = useContext(Context)
  const [AllCountryData, setAllCountryData] = useState()
  const [CountryData, setCountryData] = useState()



  useEffect(() => {

    //取得所有國家名字
    getAllCountryData()
    //收合側邊欄
    setMenuOpen(false)

  }, [])

  //#region 取得所有國家名字資料
  const getAllCountryData = useCallback(() => {
    fetch("https://covid-193.p.rapidapi.com/countries", {
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
      .then(Res => {
        let countryOptions = Res?.response.map(d => {
          return { label: d, value: d }
        })
        setAllCountryData(countryOptions)
      })
      .catch(err => {
        console.error(err);
      });
  }, [])
  //#endregion

  //#region 取得單一國家資料
  const getCountryData = useCallback((countryName) => {
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${countryName}`, {
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
      .then(Res => {
        console.log(Res)
        // setAllCountryData(countryOptions)
      })
      .catch(err => {
        console.error(err);
      });
  }, [])
  //#endregion


  return (
    <>
      <Components
        AllCountryData={AllCountryData}
        getCountryData={getCountryData}
      />
    </>
  )
}

export default Search

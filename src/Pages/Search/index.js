import React, { useCallback, useContext, useEffect, useState } from 'react'
import Components from './Components/Components'
import { Context } from '../../App'
import { APIKEY } from '../../APIKEY/APIKEY'

function Search() {

  const { menuOpen, setMenuOpen, Search_API_URL } = useContext(Context)
  const [pending, setPending] = useState(false)
  const [AllCountryData, setAllCountryData] = useState()
  const [CountryData, setCountryData] = useState()



  useEffect(() => {

    //取得所有國家名字
    setPending(true)
    getAllCountryData()
    //收合側邊欄
    setMenuOpen(false)

  }, [])

  //#region 取得所有國家名字資料
  const getAllCountryData = useCallback(() => {
    fetch(`${Search_API_URL}/countries`, {
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
        setPending(false)
      })
      .catch(err => {
        console.error(err);
        setPending(false)
      });
  }, [])
  //#endregion

  //#region 取得單一國家資料
  const getCountryData = useCallback((countryName) => {
    fetch(`${Search_API_URL}/statistics?country=${countryName}`, {
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
        // console.log(Res?.response[0])
        if (Res.response[0]) {
          setCountryData(Res?.response[0])
          setPending(false)
        }
        else {
          throw error
        }
      })
      .catch(err => {
        alert('請輸入正確的國家英文名')
        setPending(false)
      });
  }, [])
  //#endregion


  return (
    <>
      <Components
        AllCountryData={AllCountryData}
        getCountryData={getCountryData}
        CountryData={CountryData}
        setPending={setPending}
        pending={pending}
      />
    </>
  )
}

export default Search

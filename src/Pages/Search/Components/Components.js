import React, { useState, useCallback } from 'react'
import { ReactComponent as SwitchR } from '../../../Assets/Components/Search/SwitchR.svg'
import { ReactComponent as SwitchL } from '../../../Assets/Components/Search/SwitchL.svg'
import { ReactComponent as Search } from '../../../Assets/Components/Search/Search.svg'
import { TextInput, Select, Pending } from '../../../Components/'
import { populationFormat } from '../../../Handler/'
import { debounce } from 'debounce'

function Components(props) {

  const [Switch, setSwitch] = useState(true)
  const [update, setUpdate] = useState(false)
  const [typeCountryName, setTypeCountryName] = useState("")
  const [OptionCountryName, setOptionCountryName] = useState("")

  //#region  延遲600毫秒 save data
  const handleChange = useCallback(
    debounce((e) => {
      setTypeCountryName(e.target.value)
    }, 600)
    , []);
  //#endregion

  //#region 取得選取國家資料
  const handleSelect = useCallback((e) => {
    setOptionCountryName(e.target.value)
    props.getCountryData(e.target.value)
    props.setPending(true)

  }, [props.getCountryData])
  //#endregion

  return (
    <div className={`w-full h-3/4 flex justify-center items-center`}>
      <div className={`w-3/4 h-4/5 mt-10 bg-white rounded-lg shadow-lg`}>
        <div className={`flex justify-center items-center p-2 border-b-2 relative`}>
          <div className={`${Switch ? 'block' : `hidden`} relative`}>
            <TextInput
              type={`text`}
              className={``}
              placeholder={`請輸入國家英文名`}
              onChange={handleChange}
            />
            <div className={`absolute right-1 top-4 cursor-pointer`}
              onClick={() => props.getCountryData(typeCountryName)}
            >
              <Search />
            </div>
          </div>
          <div className={`${Switch ? 'hidden' : `block`}`}>
            <Select
              className={`w-48`}
              placeholder={`請選擇國家`}
              value={OptionCountryName}
              onChange={handleSelect}
              options={props.AllCountryData ?? null}
            />
          </div>
          <div className={`absolute right-5`}>
            <div className={`cursor-pointer ${Switch ? `hidden` : `block`}`} onClick={() => setSwitch((u) => !u)}><SwitchR /></div>
            <div className={`cursor-pointer ${Switch ? `block` : `hidden`}`} onClick={() => setSwitch((u) => !u)}><SwitchL /></div>
          </div>
        </div>
        {
          props.CountryData
          &&
          (
            <div className={`w-full flex flex-col  items-center`}>
              <div className={`my-2 lg:my-8 text-3xl`}>{props?.CountryData?.country}</div>
              <div className={`w-full flex flex-col items-center lg:flex-row lg:justify-around space-y-2 lg:space-y-0 lg:space-x-2`}>
                <div className={`w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-red-700 rounded-md text-white`}>
                  <p className={`text-xl lg:mb-2`}>新增確診</p>
                  <p>{populationFormat(props?.CountryData?.cases?.new)}</p>
                </div>
                <div className={`w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-red-700 rounded-md text-white`}>
                  <p className={`text-xl lg:mb-2`}>新增死亡</p>
                  <p>{populationFormat(props?.CountryData?.deaths?.new)}</p>
                </div>
                <div className={`w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-red-700 rounded-md text-white`}>
                  <p className={`text-xl lg:mb-2`}>總共確診</p>
                  <p>{populationFormat(props?.CountryData?.cases?.total)}</p>
                </div>
                <div className={`w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-red-700 rounded-md text-white`}>
                  <p className={`text-xl lg:mb-2`}>總共死亡</p>
                  <p>{populationFormat(props?.CountryData?.deaths?.total)}</p>
                </div>
              </div>
              <div className={`w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-blue-400 rounded-md text-white lg:my-8 `}>
                <p className={`text-xl lg:mb-2`}>查詢日期</p>
                <p>{props?.CountryData?.day}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Components

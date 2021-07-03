import React, { useState, useCallback } from 'react'
import { ReactComponent as SwitchR } from '../../../Assets/Components/Search/SwitchR.svg'
import { ReactComponent as SwitchL } from '../../../Assets/Components/Search/SwitchL.svg'
import { ReactComponent as Search } from '../../../Assets/Components/Search/Search.svg'
import { TextInput, Select } from '../../../Components/'
import { debounce } from 'debounce'

function Components({ AllCountryData, getCountryData }) {

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
    getCountryData(e.target.value)

  }, [getCountryData])
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
              onClick={() => getCountryData(typeCountryName)}
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
              options={AllCountryData ?? null}
            />
          </div>
          <div className={`absolute right-5`}>
            <div className={`cursor-pointer ${Switch ? `hidden` : `block`}`} onClick={() => setSwitch((u) => !u)}><SwitchR /></div>
            <div className={`cursor-pointer ${Switch ? `block` : `hidden`}`} onClick={() => setSwitch((u) => !u)}><SwitchL /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components

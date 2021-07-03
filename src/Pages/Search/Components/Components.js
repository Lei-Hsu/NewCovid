import React, { useState, useCallback } from 'react'
import { ReactComponent as SwitchR } from '../../../Assets/Components/Search/SwitchR.svg'
import { ReactComponent as SwitchL } from '../../../Assets/Components/Search/SwitchL.svg'
import { TextInput, Select } from '../../../Components/'
import { debounce } from 'debounce'

function Components({ mockData }) {

  const [Switch, setSwitch] = useState(true)
  const [typeCountryName, setTypeCountryName] = useState()
  const [OptionCountryName, setOptionCountryName] = useState()

  // 延遲600毫秒 save data
  const handleChange = useCallback(
    debounce((e) => {
      setTypeCountryName(e.target.value)
    }, 600)
    , []);

  return (
    <div className={`w-full h-3/4 flex justify-center items-center`}>
      <div className={`w-3/4 h-4/5 mt-10 bg-white rounded-lg shadow-lg`}>
        <div className={`flex justify-center items-center p-2 border-b-2 relative`}>
          <div className={`${Switch ? 'block' : `hidden`}`}>
            <TextInput
              type={`text`}
              className={``}
              placeholder={`請輸入國家英文名`}
              onChange={handleChange}
            />
            {console.log(typeCountryName)}
          </div>
          <div className={`${Switch ? 'hidden' : `block`}`}>
            <Select
              className={`w-48`}
              placeholder={`請選擇國家`}
              options={mockData}
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

import React from 'react'


// !!! text 建議也帶 tab名

function TabBottom({ Tab, setTab, bgColor, text }) {
  return (
    <div className={`w-24 mx-1 p-2 text-xs lg:text-base text-center ${Tab === `${text}` ? `${(bgColor ? bgColor : `bg-red-500`)}` : `bg-gray-500`} text-white rounded-md cursor-pointer`}
      onClick={() => setTab(`${text}`)}  // 帶入tab名
    >
      {text}
    </div>
  )
}

export default TabBottom

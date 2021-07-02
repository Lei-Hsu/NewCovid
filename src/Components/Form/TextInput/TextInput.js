import React from 'react'

export function TextInput({ type, topLabel, bottomLabel, labelColor, options, placeholder, value, className, onChange }) {
  return (
    <div className={`flex flex-col w-full space-y-2`}>
      <label className={`${labelColor ? labelColor : `text-gray-400`}`}>{topLabel}</label>
      <input
        type={type}
        className={`h-10 rounded-md bg-gray-100 p-2 mb-5 ${className} `}
        placeholder={placeholder ?? '請輸入'}
        onChange={onChange}
        value={value}
      />
      <label className={`${labelColor ? labelColor : `text-red-500`} text-sm`}>{bottomLabel}</label>
    </div>
  )
}





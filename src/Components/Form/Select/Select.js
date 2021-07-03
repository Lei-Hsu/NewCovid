import React from 'react'

export function Select({ topLabel, bottomLabel, labelColor, options, placeholder, value, className, onChange, onSelect, defaultValue }) {
  return (
    <div className={`flex flex-col w-full space-y-2 `}>
      <label className={`${labelColor ? labelColor : `text-gray-400`}`}>{topLabel}</label>
      <select
        className={`h-10 rounded-md bg-gray-100 p-2 ${className}`}
        placeholder={placeholder ?? '請選擇'}
        value={value ?? null}
        defaultValue={defaultValue ?? null}
        onChange={onChange}
        onSelect={onSelect}
      >
        <option value={''}>{''}</option>
        {
          options
          &&
          options.map((o, i) => {
            return (
              <option key={i} value={o.value}>{o.label}</option>
            )
          })
        }
      </select>
      <label className={`${labelColor ? labelColor : `text-red-500`} text-sm`}>{bottomLabel}</label>
    </div>
  )
}





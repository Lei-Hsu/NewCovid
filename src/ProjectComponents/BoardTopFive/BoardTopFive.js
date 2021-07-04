import React from 'react'
import { populationFormat } from '../../Handler/'

function BoardTopFive({ item, index }) {
  return (
    <div className={`w-48 flex flex-wrap lg:flex-col lg:w-3/5 mb-4 box-border lg:border-b-2 lg:border-red-500`} key={index}>
      <p className={`hidden sm:block`}>{`${index + 1}.${item.country}`}</p>
      <p className={`text-sm hidden lg:block`}>{populationFormat(item.newCases)}</p>
    </div>
  )
}

export default BoardTopFive

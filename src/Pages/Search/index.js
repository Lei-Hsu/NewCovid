import React, { useContext, useEffect } from 'react'
import Components from './Components/Components'
import { Context } from '../../App'

function Search() {

  const { menuOpen, setMenuOpen } = useContext(Context)

  const mockData = [
    {
      label: '台灣',
      value: '台灣'
    },
    {
      label: '中國',
      value: '中國'
    },
    {
      label: '中國',
      value: '中國'
    },
  ]

  useEffect(() => {

    setMenuOpen(false)
  }, [])


  return (
    <>
      <Components
        mockData={mockData}
      />
    </>
  )
}

export default Search
